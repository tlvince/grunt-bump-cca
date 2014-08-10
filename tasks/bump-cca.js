'use strict';

var bump = require('./lib/bump');

module.exports = function(grunt) {
  grunt.registerMultiTask('bumpCCA', 'Increment Androids versionCode', function() {
    var opts = this.options({
      files: ['app/manifest.mobile.json']
    });

    grunt.file.expand(opts.files).forEach(function(file) {
      bump(file);
    });
  });
};
