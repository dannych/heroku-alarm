const awake = require('keepawake')

const config = {
  sleepTime: '17:00',       // '00:00' default
  wakeUpTime: '1:00',       // '06:00' default
  keepaliveInterval: 5     // 5 minutes default
}

const me = 'limitless-ridge-71279'
const list = [
  me,
  'dry-thicket-72441'
]

list.forEach(name => {
  awake(`http://${name}.herokuapp.com/`, config, console.log);
})

// use to bind port in heroku
// otherwise, app will be terminated within 60s
var http = require('http');

http.createServer(function (req, res) {
  res.end('hi');
}).listen(process.env.PORT || 3000);
