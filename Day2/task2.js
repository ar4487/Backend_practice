const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const logIn = (userName, time) => {
  myEmitter.emit('isUserLoggedIn', { userName, time });
};

myEmitter.on('isUserLoggedIn', (data) => {
  console.log(`${data.userName} has logged in at ${data.time}`);
});

logIn('Arpit', '10:00 AM');