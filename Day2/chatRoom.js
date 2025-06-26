const EventEmitter = require('events');

class Chatroom extends EventEmitter {
    constructor() {
        super();
        this.messages = 0;
        this.on('join', (username) => {
            console.log(`${username} joined the chat.`);
        });
        this.on('message', (username, message) => {
            this.messages++;
            console.log(`${username}: ${message}`);
        });
        this.on('leave', (username) => {
            console.log(`${username} left the chat.`);
        });
    }

    get totalMessages() {
        return this.messages;
    }
}

const chatroom = new Chatroom();

chatroom.emit('join', 'user1');
chatroom.emit('message', 'user1', 'Hello everyone!');
chatroom.emit('message', 'user2', 'Hi!');
chatroom.emit('leave', 'user1');

console.log(`Total messages sent: ${chatroom.totalMessages}`);