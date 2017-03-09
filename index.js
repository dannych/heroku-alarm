const awake = require('keepawake')

const config = {
  sleepTime: '17:00',       // '00:00' default
  wakeUpTime: '1:00',       // '06:00' default
  keepaliveInterval: 5     // 5 minutes default
}

const me = 'limitless-ridge-71279'
const list = [
  me,
  'peaceful-earth-85248'
]

list.forEach(name => {
  awake(`http://${name}.herokuapp.com/`, config, console.log);
})

// use to bind port in heroku
// otherwise, app will be terminated within 60s
import { createServer } from 'http';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const port = process.env.PORT || 3000;

createServer(async (req, res) => {
  await delay(500);
  console.log('Request!');
  res.end('hi!');
})
.listen(port, () => console.log(`Server running on port ${port}`));