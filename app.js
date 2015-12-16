// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Connect to DB
var db = require('./models/tasks')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});

app.get('/tasks', function(req, res){
    db.Task.find({}, function(error, data){
        if ( error ) { console.log(error) } 
        else {
            res.send(data)
        }
    })
})

app.post('/form-submit', function(req, res){
    // console.log(req.body)
    var newTask = new db.Task(req.body)
    newTask.save(function(){
        res.send('task received!')
    })
})

// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

})