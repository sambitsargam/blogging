import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: 'build/frontend',
			assets: 'build/frontend',
			fallback: null,
			split: false
		})
	},
	vite: {
		resolve: {
			alias: {
				$store: resolve('src')
			}
		}
	}
};

export default config;
