Package.describe({
  name: 'seba:static-templates-debug',
  version: '4.0.0',
  summary: 'Meteor plugin for importing static HTML templates'
});
//published with meteor 1.8
Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'seba:static-html-compiler-debug@4.0.0',
    'ecmascript@0.12.0'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');
  api.use('isobuild:compiler-plugin@1.0.0');
});
