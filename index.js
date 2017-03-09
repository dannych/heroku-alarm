const awake = require('keepawake')

const config = {
  sleepTime: '17:00',       // '00:00' default
  wakeUpTime: '1:00',       // '06:00' default
  keepaliveInterval: 30     // 5 minutes default
}

const me = 'limitless-ridge-71279'
const list = [
  me,
  'peaceful-earth-85248'
]

list.forEach(url => {
  awake('http://' + url + '.herokuapp.com/', config, console.log);
})
