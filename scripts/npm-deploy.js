'use strict';

const { exec, exit } = require('shelljs');
const DotJson = require('dot-json');

const packageJson = new DotJson('package.json');
const version = (packageJson && packageJson.get('version')) || '';
if (!packageJson || !version || version.length === 0) {
    console.log('version code from package.json is invalid or cannot be read');
    exit(1);
}

const match = version.match(/^[0-9]+(\.[0-9]+)*(\-(rc([0-9]+)?))?$/);
let isPreRelease = false;
if (match && match.length > 3 && match[2] && match[3]) {
    isPreRelease = true;
}

// Write NPM Token to ~/.npmrc
exec('echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc');

// Publish to NPM
if (isPreRelease) exec('npm publish --tag=next --access=public');
else exec('npm publish --access=public');
