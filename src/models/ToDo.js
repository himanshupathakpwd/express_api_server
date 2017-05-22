var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({title: String});

todoSchema.methods.methodPropmt = function(methodName) {
  console.log("You just applied " + methodName + " method on TODO: " + this.title);
};

var ToDo = mongoose.model('todos', todoSchema);

module.exports = ToDo;
