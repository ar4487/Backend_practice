const { Readable } = require('stream');

const numbers = [10, 20, 30];

const customReadable = new Readable({
  objectMode: true, 
  read() {
    if (numbers.length === 0) {
      this.push(null); 
    } else {
      const value = numbers.shift();
      this.push(value);
    }
  }
});

customReadable.on('data', (chunk) => {
  console.log('Received:', chunk);
});

customReadable.on('end', () => {
  console.log('Stream ended.');
});
