const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config = rewireAliases.aliasesOptions({
    '@modules': path.resolve(__dirname, `${paths.appSrc}/modules`),
    '@common': path.resolve(__dirname, `${paths.appSrc}/modules/common`),
    '@hooks': path.resolve(__dirname, `${paths.appSrc}/hooks`),
    '@admin': path.resolve(__dirname, `${paths.appSrc}/modules/admin`),
    '@styles': path.resolve(__dirname, `${paths.appSrc}/styles`),
    '@history': path.resolve(__dirname, `${paths.appSrc}/history`),
    '@common-basic': path.resolve(__dirname, `${paths.appSrc}/modules/common/components/basic`),
    '@common-layouts': path.resolve(__dirname, `${paths.appSrc}/modules/common/components/layouts`),
    '@common-modals': path.resolve(__dirname, `${paths.appSrc}/modules/common/components/modals`),
    '@common-tables': path.resolve(__dirname, `${paths.appSrc}/modules/common/components/tables`),
    '@common-illustrations': path.resolve(__dirname, `${paths.appSrc}/modules/common/components/illustrations`),
  })(config, env);

  return config;
}
