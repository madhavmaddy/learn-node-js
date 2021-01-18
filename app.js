//import log and endpoint from logger.js
// const logger = require('./logger');


// logger.result('Hello')
// console.log(logger.endPoint)

//path module in node js
// const path = require('path');
// const pathObj = path.parse(__filename);
// console.log(pathObj.base)

//Os module in node js
// const os = require('os'); 
// const freeMemory = os.freemem();
// const upTime = os.uptime();
// const totalMemory = os.totalmem();

//  
// console.log(`Free memory is ${freeMemory}`)
// console.log(`Uptime memory is ${upTime}`)
// console.log(`Total memory is ${totalMemory}`)
//file system 
// const fs = require('fs');
// const files = fs.readdirSync('./')
// console.log((files));

// event method

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Register a listner
// emitter.on('messageLogged',function(arg) {
//     console.log("Listener called",arg);
// });

// //Raise a event
// emitter.emit('messageLogged',{id: 1, name: 'Madhav'});

//Creating an extending event emitter

// const EventEmitter = require('events');


// const Logger = require('./logger')
// const logger = new Logger();

// //Raising an event
// logger.on('messageLogged', (arg) => {
//     console.log('Listner called',arg);
// })

// logger.log('message')

//http in node simple way

// const http = require('http');

// const server = http.createServer();

// server.on('connection',(socket) => {
//     console.log('New connection....')
// })

// server.listen(3000);

// console.log('listening new port');

//http in node added extra data or routes

const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.write("Hello World");
        res.end();
    }
    if(req.url === '/api/course'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection',(socket) => {
    console.log('New connection....')
})

server.listen(3000);

console.log('listening new port');

//new functionality added on branch in andrewbug1
