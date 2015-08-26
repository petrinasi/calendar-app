'use strict';

describe('calendar_app.version module', function() {
  beforeEach(module('calendar_app.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
