module.exports = {
    '*.{js,jsx,json,jsonc}': ['npm run lint:fix'],
    '**/.circleci/config.yml': (filenames) => filenames.map((filename) => `npm run lint:circleci "${filename}"`),
};
