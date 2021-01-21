const express = require('express');
const route = express.Router();
const Joi = require('Joi')

const courses = [ {id: 1, name: "course 1"},{id: 2, name: "course 2"},{id: 3, name: "course 3"} ];



// app.get('/course',(req,res) => {
//     res.send([1,2,3])
// })
// :id is parameters

// route.get('/:id', (req, res) => {
//   res.send(req.params.id);
// });

// getting params for year and month

route.get('/:year/:month', (req, res) => {
  res.send(req.params)
})
//getting a specific course from courses array
route.get('/getcourse/:number', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.number))
    if(!course) res.status(404).send('This course with the given ID was not found');
    res.send(course);
   })
   
   //getting all courses from courses array
   route.get('/listCourses', (req, res) => {
     res.send(courses)
   })
   
   //post method
   // route.post('/api/courses', function (req, res) {
   //   res.send('POST request to the homepage')
   // })
   //adding items into courses using post method by javascript
   // route.post('/api/addcourse', function (req, res) {
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
   route.post('/api/addcourse', function (req, res) {
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
   
   route.put('/:id', (req,res) => {
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
   module.exports = route;