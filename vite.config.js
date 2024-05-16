import autoprefixer from 'autoprefixer';
import viteImagemin from 'vite-plugin-imagemin'

export default {
    base: './',
    root: "src",
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        open: true,
    },
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
    plugins: [
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 75,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        })
    ],
}