import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'; 
import path from "path";
import { quasar } from '@quasar/vite-plugin'

export default defineConfig({
    plugins: [
        vue(),
        laravel(["resources/js/app.js"]),
        quasar({
            sassVariables: 'resources/css/quasar/variables.sass'
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 3000,
        hmr: {
            host: "localhost",
        },
    }, 
    resolve: { 
        alias: {
            // '@assets': path.resolve(__dirname, "./resources/assets"),
            "@": path.resolve(__dirname, "./resources/js"),
            components: path.resolve(__dirname, "./resources/js/components"),
            pages: path.resolve(__dirname, "./resources/js/pages"),
        },
    },
});
