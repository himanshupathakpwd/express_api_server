var ToDo = require('../models/ToDo');
function ToDoApi() {
  this.endpoint = '/api/todo';
}
ToDoApi.prototype.create = function(todoObj) {
  var todo = new ToDo(todoObj);
  todo.save(function(error, test) {
    todo.methodPropmt('save');
  });
}

ToDoApi.prototype.getAll = function() {
  return ToDo.find({});
}

ToDoApi.prototype.getEndpoint = function() {
  return this.endpoint;
}

module.exports = ToDoApi;
