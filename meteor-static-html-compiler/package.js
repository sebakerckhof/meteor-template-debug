Package.describe({
  name: 'seba:static-html-compiler-debug',
  version: '1.0.0',
  summary: 'Compiles static HTML templates so you could import them from a module'
});

Npm.depends({
  'cheerio': '0.22.0',
  'html-minifier': '3.5.8',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');

  const packages = [
    'caching-compiler@1.1.12',
    'ecmascript@0.11.1',
    'babel-compiler@7.0.0',
  ];

  api.use(packages, 'server');
  api.imply(packages, 'server');

  api.mainModule('build/src/index.js', 'server');

  api.export([
    'StaticHtmlCompiler',
  ], 'server');
});
