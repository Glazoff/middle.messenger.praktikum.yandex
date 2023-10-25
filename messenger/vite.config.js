import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: 'src',
	build: 'dist',
  plugins: [handlebars()],
})
