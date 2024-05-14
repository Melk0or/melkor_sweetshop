import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: { 
      "@": "/src"
      // find: "@/", 
      // replacement: path.resolve(__dirname, './src/') 
    }
  },
  server: {
    proxy: {
      '/api' : {
        target: 'https://easy-crane-privately.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
