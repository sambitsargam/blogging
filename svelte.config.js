import { resolve } from 'path';
import adapter from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: vercel(options)
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
