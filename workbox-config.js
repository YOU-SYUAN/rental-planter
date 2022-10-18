module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,xml,ico,html,txt,css,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};