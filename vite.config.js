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
          remote_app: "https://asyrafbilalfbj.github.io/guest-book-remote/assets/remoteEntry.js",
      },
      exposes: {
          './router': './src/router/index.js',
      },
      shared: ['vue','vuex','vue-router']
    })
  ],
  build: {
    outDir: 'docs',
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  // base: '/guest-book-host/'
})
