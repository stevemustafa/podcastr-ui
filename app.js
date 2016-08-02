
/* module dependencies */

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
// app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))




/* some serious work now */

// "<url>/"
app.get('/', function(req, res) {
  res.end("Hello, World!")
})

// "<url>/about"
app.get('/about', function(req, res) {
  res.end("About Page")
})

// "<url>/help"
app.get('/', function(req, res) {
  res.end("Help Page")
})





//get port from the environment
var port = process.env.PORT || 1337

app.listen(port);
console.log('listening on port:' + port);
