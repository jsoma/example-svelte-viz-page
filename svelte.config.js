// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import dsv from '@rollup/plugin-dsv';
import importAssets from 'svelte-preprocess-import-assets'

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [importAssets(), preprocess()],

	kit: {
		paths: {
			base: dev ? '' : '/example-svelte-viz-page',
		},
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),
		vite: {
			plugins: [
				dsv()
			]
		}
	}
};

export default config;
