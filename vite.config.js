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
        index: resolve(__dirname, 'src'),
        auth: resolve(__dirname, 'src/pages/auth'),
        registration: resolve(__dirname, 'src/pages/registration'),
        profile: resolve(__dirname, 'src/pages/profile'),
        404: resolve(__dirname, 'src/pages/404'),
        500: resolve(__dirname, 'src/pages/500'),
      },
    },
  },
});
