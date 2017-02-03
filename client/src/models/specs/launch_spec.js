var assert = require('assert');
var Launches = require('../launches');

describe('Launches', function() {
    var launches;

    beforeEach(function() {
        launches = new Launches();
    });

    it('should get an array of launches', function() {
      assert.equal(10, launches.size);
    });
  });
