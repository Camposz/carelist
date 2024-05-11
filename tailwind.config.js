const defaultTheme = require('./themes/default');

module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        colors: {
            ...defaultTheme,
        },
    },
    plugins: [],
};
