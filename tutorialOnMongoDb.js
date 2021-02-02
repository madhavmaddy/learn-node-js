const { boolean } = require('Joi');
const mongoose = require('mongoose');
const { result } = require('underscore');
mongoose.connect('mongodb://localhost/playground').then(() => console.log('connnected to mongodb'))
.catch(err => console.log('could not connect to mongodb.....',err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    loadId: String
    
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse() {
    
    const course = new Course({
        name: 'Node.js course20',
        author: 'Madhav',
        tags: ['node','backend'],
        isPublished: true,
        loadId: 1234
    });
    
    const result = await course.save();
    console.log(result);
}

// createCourse();

async function getCourse() {
    
    const courses = await Course.find({name: 'Node.js course20'})
                           .limit(2).select({name: 1})
    console.log(courses)
}
// getCourse();

async function getLoadIdByName(id) {
    
   const loadId = await Course.find({loadId:id }).select({loadId: 1})
//    console.log(loadId)
//    console.log(loadId[0]._id)
      return loadId;
}

// getLoadIdByName('1234')


async function async1() {
    const loadid = await getLoadIdByName('1234');
    // console.log('loadid on async1',loadid[0]._id)
    updateValueById(loadid[0]._id);
}
async1();


async function updateValueById(id) {
    
    const loadUdid = await Course.findById(id)
    if(!loadUdid) return;

    loadUdid.isPublished= false;
    loadUdid.author = "New Author4";
    const result = await loadUdid.save();
    console.log(result)

}


// updateValueById(loadUdid1);



