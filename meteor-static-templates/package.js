Package.describe({
  name: 'seba:static-templates-debug',
  version: '6.0.0',
  summary: 'Meteor plugin for importing static HTML templates'
});
//published with meteor 1.7.0.5
Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'seba:static-html-compiler-debug@6.0.0',
    'ecmascript@0.11.1'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.5');
  api.use('isobuild:compiler-plugin@1.0.0');
});
