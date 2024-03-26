const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/app'),
            '@components': path.resolve(__dirname, 'src/app/components/'),
            '@hooks': path.resolve(__dirname, 'src/app/hooks/'),
            '@shared': path.resolve(__dirname, 'src/app/components/shared/'),
            '@svg': path.resolve(__dirname, 'src/assets/images/svg/'),
        },
    },
};
