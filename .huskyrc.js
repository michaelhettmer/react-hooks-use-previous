module.exports = {
    hooks: {
        'pre-commit': 'lint-staged -r',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
};
