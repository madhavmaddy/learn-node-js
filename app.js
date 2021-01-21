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
const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());
//custom middleware function the use of middle ware function is to call other functions using express. using next();
app.use(function (req,res,next) {
    console.log("logging.....")
    next();
})
app.use(function(req,res,next){
    console.log('Authentication')
    next();
})

const courses = [ {id: 1, name: "course 1"},{id: 2, name: "course 2"},{id: 3, name: "course 3"} ]

// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// });

// app.get('/course',(req,res) => {
//     res.send([1,2,3])
// })
//:id is parameters
// app.get('/api/courses/:id', (req, res) => {
//   res.send(req.params.id);
// });

//getting params for year and month

// app.get('/api/:year/:month', (req, res) => {
//   res.send(req.params)
// })
//getting a specific course from courses array
app.get('/api/v1/getcourse/:number', (req, res) => {
 const course = courses.find(c => c.id === parseInt(req.params.number))
 if(!course) res.status(404).send('This course with the given ID was not found');
 res.send(course);
})

//getting all courses from courses array
app.get('/api/listCourses', (req, res) => {
  res.send(courses)
})

//post method
// app.post('/api/courses', function (req, res) {
//   res.send('POST request to the homepage')
// })
//adding items into courses using post method by javascript
// app.post('/api/addcourse', function (req, res) {
//     if(!req.body.name){
//         res.status(400).send('Name field is not found.')
//         return;
//     }
//   const course ={
//       id: courses.length + 1,
//       name: req.body.name
//   };
//   courses.push(course);
//   res.send(course);
// })

//adding items into courses using Joi for validation and error messages
app.post('/api/addcourse', function (req, res) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
    }
  const course ={
      id: courses.length + 1,
      name: req.body.name
  };
  courses.push(course);
  res.send(course);
})

//put method

app.put('/api/courses/:id', (req,res) => {
    //checking the course is exists or not
    const course = courses.find(c => c.id === parseInt(req.params.id))
 if(!course) res.status(404).send('This course with the given ID was not found');
    
 //validate

const { error } = validateCourse(req.body)
if(error){
    res.status(400).send(error.details[0].message)
    return;
};

//update course
course.name = req.body.name;
res.send(course);

//validatecourse
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}



})
//PORT
//adding env port using export PORT = 5000 (without semicolon) using terminal 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port number: ${port}`));


