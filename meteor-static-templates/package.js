Package.describe({
  name: 'seba:static-templates-debug',
  version: '1.0.0',
  summary: 'Meteor plugin for importing static HTML templates'
});

Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'seba:static-html-compiler-test@1.0.0',
    'ecmascript@0.2.0'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('isobuild:compiler-plugin@1.0.0');
});
