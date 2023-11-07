var events = require('events');

var eventemitter = new events.EventEmitter();

var main = function () { 
    console.log('Screaming...');
}

eventemitter.on("Screamss", main);

eventemitter.emit('screamss');