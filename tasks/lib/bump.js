'use strict';

var grunt = require('grunt');

module.exports = function(file) {
  var manifest = grunt.file.readJSON(file);
  var before, after;
  before = after = manifest.versionCode;
  after++;
  manifest.versionCode = after;
  manifest = JSON.stringify(manifest, null, 2);
  grunt.file.write(file, manifest);
  grunt.log.writeln(file + ': ' + before + ' -> ' + after);
};
