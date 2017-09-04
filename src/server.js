var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.listen(4000, () => {
  console.log('Application started');
});

// database connectivity
mongoose.connect('mongodb://localhost/myApp');

var db = mongoose.connection;

db.on('error', function () {
  console.log('error in connection');
});

db.once('open', function () {
  console.log('we are connected');
});

var ToDoApi = require('./APIs/todoApi');

app.get('/', (req, res) => {
  res.send('Hello world');
});

var todoApi = new ToDoApi();
var todoEndpoint = todoApi.getEndpoint();

// Creating a ToDo
app.post(todoEndpoint, (req, res) => {
  todoApi.create(req.body);
  res.status(201).json(req.body);
});

// Fetching All Todos
app.get(todoEndpoint + '/list', (req, res) => {
  todoApi.getAll().exec((err, todos) => {
    res.status(200).json(todos);
  });
});

// Fetch single Todo
app.get(todoEndpoint + '/:id', (req, res) => {
  res.status(200).json({ 'hello': 'World' });
});
