const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'home-hub',
		projectName: 'react-utils',
		webpackConfigEnv,
		argv,
	});

	return merge(defaultConfig, {
		externals: ['@home-hub/react-utils'],
		// modify the webpack config however you'd like to by adding to this object
	});
};
