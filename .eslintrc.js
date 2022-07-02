module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint/eslint-plugin'],
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	root: true,
	env: {
		node: true,
		es2021: true,
		browser: true,
	},
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'always',
		],
		'eol-last': [
			'error',
			'always',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'default-case': 'error',
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'no-case-declarations': 'off',
		camelcase: 'off',
		'keyword-spacing': 'error',
		'spaced-comment': [
			'error',
			'always',
		],
		'no-var': 'error',
		eqeqeq: 'error',
		'no-eq-null': 'error',
		'arrow-parens': [
			'error',
			'always',
		],
		'no-tabs': 'off',
		'vue/html-indent': ['error', 'tab'],
		'space-before-function-paren': 'off',
		'vue/max-attributes-per-line': 'off',
	},
};
