'use strict';

var grunt = require('grunt');
var bump = require('../tasks/lib/bump');

var out = 'tmp/manifest.mobile.json';

exports.bumpCCA = {
  setUp: function(done) {
    var manifest = {
      versionCode: 42,
      packageId: 'com.tlvince'
    };
    manifest = JSON.stringify(manifest);
    grunt.file.write(out, manifest);
    done();
  },

  defaults: function(test) {
    test.expect(1);

    bump(out);

    var manifest = grunt.file.readJSON(out);
    var actual = manifest.versionCode;
    var expected = 43;

    test.strictEqual(actual, expected, 'should increment versionCode');
    test.done();
  }
};
