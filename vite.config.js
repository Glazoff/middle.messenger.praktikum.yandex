import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [handlebars({
    context: {
      titleApp: 'My messenger',
    },
  })],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        auth: resolve(__dirname, 'src/pages/auth'),
        registration: resolve(__dirname, 'src/pages/registration'),
        editProfile: resolve(__dirname, 'src/pages/editProfile'),
        editPassword: resolve(__dirname, 'src/pages/editPassword'),
        profile: resolve(__dirname, 'src/pages/profile'),
        chat: resolve(__dirname, 'src/pages/chat'),
        404: resolve(__dirname, 'src/pages/404'),
        500: resolve(__dirname, 'src/pages/500'),
      },
    },
  },
});
