import {
  StaticHtmlCompiler,
} from 'meteor/seba:static-html-compiler-debug';

Plugin.registerCompiler({
  extensions: ['html'],
  archMatching: 'web',
  isTemplate: true
}, () => new StaticHtmlCompiler());
