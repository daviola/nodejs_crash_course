const EventEmmitter = require('events');

// Create class
class MyEmitter extends EventEmmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEmitter.emit('event');
