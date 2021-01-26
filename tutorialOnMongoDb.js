const { boolean } = require('Joi');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground').then(() => console.log('connnected to mongodb'))
.catch(err => console.log('could not connect to mongodb.....',err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
    
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse() {
    
    const course = new Course({
        name: 'Node.js course20',
        author: 'Madhav',
        tags: ['node','backend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

createCourse();

async function getCourse() {
    
    const courses = await Course.find({name: 'Node.js course20'})
    console.log(courses)
}
getCourse();