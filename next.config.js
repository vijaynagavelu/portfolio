/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000, // Adjust the limit as needed
                    name: '[name].[ext]',
                    outputPath: 'static/media/', // You can change the output path as needed
                    publicPath: '/_next/static/media/', // You can change the public path as needed
                },
            },
        });

        return config;
    },
};
