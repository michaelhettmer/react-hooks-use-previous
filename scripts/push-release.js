'use strict';

const git = require('nodegit');
const { exec, exit } = require('shelljs');
const DotJson = require('dot-json');

let versionString = '';
let version = '';
process.argv.forEach(function(val, index) {
    if (index === 2 && typeof val === 'string') {
        const match = val.match(/^v[0-9]+(\.[0-9]+)*(\-(rc([0-9]+)?))?$/);
        if (match && match.length > 0 && match[0] && typeof match[0] === 'string') {
            versionString = match[0];
            version = versionString.slice(1);
        } else {
            console.error('version format is not valid:', val);
            exit(1);
        }
    }
});

if (!versionString || typeof versionString !== 'string' || (versionString && versionString.length === 0)) {
    console.error('version parameter is missing');
    exit(1);
}

const packageJson = new DotJson('package.json');
const oldVersion = (packageJson && packageJson.get('version')) || '';
if (!packageJson || !oldVersion || oldVersion.length === 0) {
    console.log('package.json is invalid or cannot be read');
    exit(1);
}

git.Repository.open('.')
    .then(function(repository) {
        repository
            .getCurrentBranch()
            .then(function(result) {
                const currentBranchName = result.shorthand();
                if (currentBranchName === 'master') {
                    // update npm package version number and commit modified package.json to master
                    packageJson.set('version', version).save();
                    const cmdVersionFormat = `yarn lint:fix`;
                    const cmdVersionUpdate = `git add package.json`;
                    const cmdVersionCommit = `git commit -S -m "Bump package.json version number to ${version}"`;
                    const cmdVersionPush = `git push origin master`;
                    const cmdVersionResult = exec(`${cmdVersionFormat} && ${cmdVersionUpdate} && ${cmdVersionCommit} && ${cmdVersionPush}`);
                    if (!cmdVersionResult || cmdVersionResult.code !== 0) {
                        console.error('version update of package.json failed');
                        exit(1);
                    }

                    // create and push release tag
                    const cmdTag = `git tag -s "${versionString}" -m "Release of ${versionString}"`;
                    const cmdTagPush = `git push origin "${versionString}"`;
                    const cmdTagResult = exec(`${cmdTag} && ${cmdTagPush}`);
                    if (!cmdTagResult || cmdTagResult.code !== 0) {
                        console.error('release tag creation / push failed');
                        exit(1);
                    } else console.log('successfully tagged a new release');
                } else console.error("can't release from branch", currentBranchName);
            })
            .catch(function(reason) {
                console.error('cannot get git branch name: ', reason);
            });
    })
    .catch('cannot open git repository');
