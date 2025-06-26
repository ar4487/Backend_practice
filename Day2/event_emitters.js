const EventEmitter= require('events')
const emitter= new EventEmitter();

emitter.on('greet',(name)=>{
    console.log(`hello ${name}`)
})
emitter.once('init', () => {
  console.log('Initialized once');
});

emitter.off('greet', "name");
emitter.emit('greet','Arpit')
emitter.emit('init')
emitter.emit('init')
emitter.removeAllListeners('greet');

console.log(emitter.listenerCount('greet')); // How many listeners?
class Auth extends EventEmitter{
    login(user){
        this.emit('login',user)
    }
}
const auth = new Auth();

auth.on('login',(user)=>{
    console.log(`${user} logged in`)
})
auth.login("Arpit")
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Hello from EventEmitter!');
});

server.listen(3000, () => console.log('Server started'));
