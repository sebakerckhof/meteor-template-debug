Package.describe({
  name: 'seba:static-templates-debug',
  version: '3.0.0',
  summary: 'Meteor plugin for importing static HTML templates'
});
//published with meteor 1.6
Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'seba:static-html-compiler-debug@3.0.0',
    'ecmascript@0.2.0'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');
  api.use('isobuild:compiler-plugin@1.0.0');
});
