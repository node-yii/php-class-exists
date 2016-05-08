"use strict";
var class_exists = require('../index.js');
var expect = require("expect.js");

class ExistingClass
{
   // ...
}

describe('The "class_exists" function', function() {
   it('should not see unexisting class', function() {
      expect(class_exists("UnexistingClass")).to.be.false;
   });
   it('should see existing class', function() {
      expect(class_exists("ExistingClass")).to.be.false;
   });
});
