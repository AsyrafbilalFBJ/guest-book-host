import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
          remote_app: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
          './router': './src/router/index.js',
      },
      shared: ['vue','vuex','vue-router']
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
