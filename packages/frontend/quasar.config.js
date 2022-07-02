const { configure } = require('quasar/wrappers');

module.exports = configure(function(ctx) {
	return {
		preFetch: true,
		boot: [
			'axios',
		],
		css: [
			'app.scss',
		],
		extras: [
			'roboto-font',
			'mdi-v6',
		],
		build: {
			target: {
				browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
				node: 'node16',
			},
		},
		devServer: {
			open: true,
		},
		ssr: {
			pwa: false,
			prodPort: 3000,
			middlewares: [
				'render',
			],
		},
		pwa: {
			workboxMode: 'generateSW',
			injectPwaMetaTags: true,
			swFilename: 'sw.js',
			manifestFilename: 'manifest.json',
			useCredentialsForManifestTag: false,
		},
		animations: 'all',
	};
});
