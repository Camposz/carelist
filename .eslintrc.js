module.exports = {
    root: true,
    extends: ['universe/native'],
    ignorePatterns: ['.config/*', ".eslintrc.js"],
    rules: {
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        indent: ['error', 4],
        'no-console': 'error',
        'arrow-body-style': ['error', 'as-needed'],
    },
};