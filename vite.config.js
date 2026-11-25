import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // 👇 Add this for proper routing
    base: '/',
    build: {
        outDir: '../backend/petsudur/templates',
        assetsDir: 'assets',
        emptyOutDir: true,
    },
    server: {
        proxy: {
            // 👇 This proxies API calls to Django in development
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
    },
})