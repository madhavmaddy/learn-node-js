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

// const http = require('http');

// const server = http.createServer((req, res) => {

//     if(req.url === '/'){
//         res.write("Hello World");
//         res.end();
//     }
//     if(req.url === '/api/course'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// server.on('connection',(socket) => {
//     console.log('New connection....')
// })

// server.listen(3000);

// console.log('listening new port');

// Express
const express = require("express");
//this morgan is used to log the api call request time
const morgan = require("morgan");
const courses = require("./routes/courses");
const list = require("./routes/list");
const app = express();
const Joi = require("joi");
app.use(express.json());

//route the api to routes/courses.js folder
app.use("/api/courses", courses);

app.use("/api/list", list);
//to enable this morgan based on envirnment to set the environment use export NODE_ENV=production
if (app.get("env") === "Development".toLowerCase()) {
  app.use(morgan("tiny"));
  console.log("Morgan enabled..");
}

//this is to use give acccss to folder and read through local host
app.use(express.static("public"));
//custom middleware function the use of middle ware function is to call other functions using express. using next();
app.use(function (req, res, next) {
  console.log("logging.....");
  next();
});
app.use(function (req, res, next) {
  console.log("Authentication");
  next();
});

//PORT
//adding env port using export PORT = 5000 (without semicolon) using terminal
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port number: ${port}`));

//config package to get values based on envirnment
const config = require("config");
//is used to get the name from config folder based on the envirnment set
console.log(`name: ${config.get("name")}`);

//call back function and named functions to resue

// console.log('before')
// getUser(1,user);

// console.log('After');

// function user(user ) {
//   getrepos(user.github, repos)
// }
// function repos(repo) {
//   console.log('repo is  ',repo)
// }


// function getUser(id,callback) {
//   setTimeout(() => {
//     console.log('Getting the data from DB')
//     callback({id: id, github: 'Madhav'});
//   }, 2000);
   
// }

// function getrepos(username, callback) {
//   setTimeout(() => {
//     console.log('Getting repos from the git api....')
//     callback(['repo1','repo2','repo3']);
//   }, 2000);
  
// }

//Replacing callback function into promises

// console.log('before')
// // getUser(1,user);
// //resolve using promises
// // getUser(1).then(user => getrepos(user.github))
// // .then(result => console.log(result))
// // console.log('After');

// //resolve promises using async and await
// async function finalResult() {
//   const user = await getUser(1);
//   const reposdetails = await getrepos(user.github);
//   console.log(reposdetails);
// }
// finalResult();

// function user(user ) {
//   getrepos(user.github, repos)
// }
// function repos(repo) {
//   console.log('repo is  ',repo)
// }



// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Getting the data from DB')
//       resolve({id: id, github: 'Madhav'});
//     }, 2000);
//   })
   
// }

// function getrepos(username) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('Getting repos from the git api....')
//       resolve(['repo1','repo2','repo3']);
//     }, 2000);

//   })
  
  
// }

//connecting to mongo db

