Package.describe({
  name: 'seba:static-html-compiler-debug',
  version: '5.0.0',
  summary: 'Compiles static HTML templates so you could import them from a module'
});
// published with meteor 1.8!
Npm.depends({
  'cheerio': '0.22.0',
  'html-minifier': '3.5.20',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.8');

  const packages = [
    'caching-compiler@1.2.0',
    'ecmascript@0.12.0',
    'babel-compiler@7.2.0',
  ];

  api.use(packages, 'server');
  api.imply(packages, 'server');

  api.mainModule('build/src/index.js', 'server');

  api.export([
    'StaticHtmlCompiler',
  ], 'server');
});
