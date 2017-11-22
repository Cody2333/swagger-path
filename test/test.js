const assert = require('assert');
const swagger2path = require('../index');
describe('SwaggerPath', function() {
  describe('single curly braces', function() {
    it('should return /users/:id when the value is /users/{id}', function() {
      assert.equal(swagger2path('/users/{id}'), '/users/:id');
    });
  });
  describe('multi curly braces', function() {
    it('should return /users/:id/books/:bookId when the value is /users/{id}/books/{bookId}', function() {
      assert.equal(swagger2path('/users/{id}/books/{bookId}'), '/users/:id/books/:bookId');
    });
  });
});