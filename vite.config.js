import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  	root: resolve(__dirname, 'src'),
  	plugins: [handlebars({
		partialDirectory: resolve(__dirname, 'src/partials'),
		context: {
			titleApp: 'My messenger'
		},
	})],

	build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                auth: resolve(__dirname, 'src/pages/auth/auth.html'),
                registration: resolve(__dirname, 'src/pages/registration/registration.html'),
                profile: resolve(__dirname, 'src/pages/profile/profile.html'),
                404: resolve(__dirname, 'src/pages/404/404.html'),
				500: resolve(__dirname, 'src/pages/500/500.html'),
            },
        },
    },
})