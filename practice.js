//max with 2 numbers

// function number(a, b) {
//     return a > b ? a : b;
// }
// console.log(number(7,6));

//return true or false
// function isLandscape(width, height) {
//     return width > height;
// }

// console.log(isLandscape(155,13))

//fizzbuzz

// function fizzBuzz(input) {

//     return (typeof input !== 'number') ? "Not a number" : ((input % 3 === 0) && (input % 5 === 0)) ? "FizzBuzz"
//     : (input % 3 === 0) ? "Fizz" : (input % 5 === 0) ? "Buzz" : input
    
// }
// const output = fizzBuzz(16);
// console.log(output)

//speed limit

// function checkSpeed(speed) {
//     Math.floor(speed)
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed <= speedLimit + kmPerPoint){
//         return 'ok'
//     }else {
//         let points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if(points >= 12){
//             return 'Suspended'
//         } else 
//             return `${points} point`

//     }
// }
// const output = checkSpeed(80);

// console.log(output)

//even or odd

// function showNumbers(limit) {

//     for(let i = 0; i<= limit; i++ ){
//         if(i % 2 === 0){
//             console.log(i, "Even")
//         } else
//         console.log(i, "Odd")
//     }
    
// }

// showNumbers(10);

//count numbers

// const array = [0, null, undefined, "",2,3];

// function countTruthy(array) {

//     let count = 0;
//     for(let value of array){
    
//         if(value){
//             count++;
//         }
            
//         }
    
//         return count;
// }

// console.log(`total ${countTruthy(array)}`);

//printing string values with object

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// function showProperties(obj) {
//     for(let key in obj){
//         if(typeof obj[key] === 'string'){
//             console.log(key, obj[key])
//         }
//     }
// }

// showProperties(movie)

//sum of multiples of 3 and 5

// function sum(limit) {

//     for(let i = 1; i <= limit; i++){
//         if(i * 3 < limit)
//         console.log(i * 3)
//     }

//     for(let j = 1; j < limit; j++){
//         if(j * 5 <= limit)
//         console.log(j * 5)
//     }

// }
// sum(10)



//average marks

// const marks = [80,40,60,50,40,100]
// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
    
    
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
       
//     }
    
    
//      function calculateAverage(array) {
//     let sum = 0;
    
//     for (let value of array)
//     sum += value;
    
//     return sum / array.length;
//     }

//     console.log(calculateGrade(marks));

//SHOW STARS

// function showStars(rows) {

//         for(let row = 1; row <= rows; row++){
//             let pattern = "";
//             for(let i = 0; i < row; i++){
//                 pattern += "*";
                
//             }
//             console.log(pattern)
//         }

// }
// showStars(10)

//factory function

// function circleName(radius) {
    
//     return {
//         radius,
//         location : 1,
//         myDraw() {
//             console.log("Draw")
//         }
//     }
// }

// circleName(1);
// circleName(1).myDraw();

// constructor function
// function circle(radius) {
//     this.radius = radius,
//     this.draw = function draw() {
//     console.log("Draw") 
//     }}

//     const circle1 = new circle(1);

//     console.log(circle1);

//dynamic nature of objects

// const circle = {
//     radius: 1
// };

// circle.color = 'Yellow';
// circle.draw = function draw() {
    
// }

// delete circle.color;
// delete circle.draw;
// console.log(circle)

//calling function in 2 ways

// function circle(radius) {

//     this.radius = radius;
  
//     this.draw = function draw() {
//         console.log('Draw');
//     }
// }

// const circle1 = new circle(1);

// circle.call(1) //to call another object

//iterating objects

// const circle = {
//     radius: 1,
//     location : 2,
//     draw() {
//         console.log("Helloo")
//     }
// }

// // for(let key in circle){
// //     console.log(key);
// // }

// for(let value of Object.keys(circle)){
//     console.log(value, circle[value])
// }

// for(let value1 of Object.entries(circle)){
//     console.log(value1)
// }

//clone objects

// const circle = {
//     radius: 1,
//     location : 2,
//     draw() {
//         console.log("Helloo")
//     }
// }

//one way to define
// const another = {};

// for(let key in circle){
//     another[key] = circle[key];
// }

//another way

// const another = Object.assign({}, circle)

//third way 

// const another = { ...circle }

//Address object

// const Address = {
//     street: "Pillaraya",
//     city: "yanam",
//     zipCode: 533464

// }

// function showAddress(Address) {
    
//     for(let key in Address)
//     console.log(key, Address[key])
    
// }

// showAddress(Address)

//factory function

// function createAddress(street,city,zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// const address = createAddress('Pillaraya','Yanam',533464);
// const address1 = createAddress('Pillaraya','Yanam',533464);
// // console.log(address1)

// //Pascal function

// // function Address(street,city,zipCode){
// //     this.street = street,
// //     this.city = city,
// //     this.zipCode = zipCode
// // }

// // const data = new Address('Hello','city name',533464);
// // console.log(data)

// //comparing two objects
// function isSame(address, address1) {
//     return address === address1;
// }

// function isEqual(address, address1) {
//     return address.street === address1.street && address.city === address1.city && address.zipCode === address1.zipCode}

//     console.log(isSame(address, address1));
//     console.log(isEqual(address, address1))

//array
// const number = [3,4];
// //adding values in last
// number.push(5,6);
// //adding values in first
// number.unshift(1,2);
// //adding in specific location
// number.splice(2,0,'a','b')
// console.log(number)

//finding index
// const numbers = [1,2,3,4,5,1,6];

// //find index
// console.log(numbers.indexOf(3))

// //value contains it returns true value
// console.log(numbers.includes(4))
// console.log(numbers.includes(1) !== -1)

// //finding last index
// console.log(numbers.lastIndexOf(1))

// //finding index based on value
// console.log(numbers.indexOf(1,4))

//find method 

// const courses = [{id: 1, name: 'a'}, {id: 2, name: 'b'}];

// const result = courses.find(function value(course) {

//     return course.name === 'b';
    
// })

// console.log(result)

//arrow function

// const courses = [{id: 1, name: 'a'}, {id: 2, name: 'b'}];

// const result = courses.find((course => course.name === 'b'));


// console.log(result)

//removing element from array

// const numbers = [1,2,3,4];
// //removes the last value
// numbers.pop();
// //removes the first value
// numbers.shift();
// //removes the middle value
// numbers.splice(1,1)
// console.log(numbers)

//empty the array

// let numbers = [1,2,3];

//solution 1
// numbers = [];

//solution 2
// numbers.length = 0;

//solution 3
// numbers.splice(0,numbers.length);

//solution 4
// while(numbers.length > 0)
// numbers.pop()
// console.log(numbers)

//combining arrays

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = first.concat(second);
// console.log(combined);

// const combine = combined.slice(3,5)
// console.log(combine)

//spread operator

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [...first, ...second];
// console.log(combined)

// const copy = [...combined]
// console.log(copy)

// //iterating array
// const first = [1,2,3];

// //solution 1
// for(let key of first)
// console.log(key)

// //solution 2
// first.forEach((value,index) => console.log(index, value));

//joining and split the words

// const value = [1,2,3];

// const result = value.join(".");
// console.log(result)

// const text = 'How are you'
// const parts = text.split(" ")
// console.log(parts)

// const combined = parts.join("-")
// console.log(combined)

//sorting or reverse numbers

// const numbers = [2,3,1];

// numbers.sort();
// console.log(numbers)

// numbers.reverse();
// console.log(numbers)

//sorting array in objects

// const courses = [{id: 1,name: "Node.js"},
// {id: 2, name: "Javascript"}];

// courses.sort(function value(a,b) {
//     a.name.toUpperCase;
//     a.name.toUpperCase;

//     if(a.name < b.name) return -1;
//     if(b.name < a.name) return 1;
//     return 0;
// })

// console.log(courses)

//every and some methods change every to some

// const numbers = [1,2,3,-1,4]

// const positive = numbers.every(function (value) {
//     return value >=0;
// })
// console.log(positive)
//filtered
// const numbers = [1,2,3,-1,4]

// const filtered = numbers.filter(value => value >= 0);

// console.log(filtered)

//map

// const numbers = [1,2,3,-1,4]

// const filtered = numbers.filter(value => value >= 0).map(n => '<li>' + n + "</li>").join(" ")




// console.log(filtered)

//Reduce method

// const numbers = [1,2,3,4,5];

// const result = numbers.reduce((accummulator, currentvalue) => accummulator + currentvalue)

// console.log(result)

//range 

// function generate(min, max) {
//     const sum = [];
//     for(i=min; i<=max; i++)
//     sum.push(i);
//     return sum;
    
    
// }

// const numbers = generate(4,10);
// console.log(numbers)

//includes method

// const numbers = [1,2,3,4,5];

// function expected(value) {
    
//     for(let key of value)
//         if(key === 4)
//         return true;
//         return false;
//     }


// console.log(expected(numbers))

//exclude

// function exclude(value, excludeValue) {
//     const sum = [];

//     for(let key of value)
//     if(key !== excludeValue)
//     sum.push(key)
//     return sum
    
// }

// const output = exclude(numbers, 4)
// console.log(output)

//Function declaration

// function walk() {
//     console.log('Walking')
// }

// //function expression
// const run = function() {
//     console.log("Run")
// }

// walk();
// run();

//arugements keyword

// function add(a,b) {
//     console.log(arguments)
//     return console.log(a + b);  
// }

// add(1,2,3,4,5,6);

//total the aruguments value using keyword

// function add() {
//     let total = 0;
//     for(value of arguments)
//     total += value;
//     return total;
// }

// let result = add(1,2,3,4,5,10)
// console.log(result)

//Returning arguments with 3dots

// function total(...args) {
// console.log(args)
// return args.reduce((a,b) => a+b);
// }
// console.log(total(1,2,3,4,5,6));

//rest operator(...args) cannot give at the middle or first of parameters in functions
// function total(discount, ...args) {
//     console.log(args)
//     const total = args.reduce((a,b) => a+b);
//     return total * (1 - discount)
//     }

//     console.log(total(0.1,2,3,4,5,6));

//adding default parameter value
// function total(principal,rate=3.5,years=5) {
//     return principal * rate / 100 * years;
// }

// console.log(total(10000,3.5,5))

//Getter and setter

// const person = {
//     firstName : "Madhav",
//     LastName: "B",

//     get fullName() {
//         return `${this.firstName} ${this.LastName}` 
//     },
//     set fullName(value){
        
//         if(typeof value !== 'String') 
//         throw new Error('Hi');
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.LastName = parts[1];
        
//     }
// }
// try {
//     person.fullName = "Maddy1 b";
// } catch (error) {
//     console.log(error);
// }

    // console.log(person);
    
    // console.log(person.fullName)
    
    //this keyword
// const video = {
//     title : 'a',
//     tags: ['a','b','c'],

//     showTags() {
//         this.tags.forEach(function (tag){
//             console.log(this.title, tag);
//         }, this)
//     },
//     play() {
//         console.log(this)
//     }
// }

// video.stop = function() {
//     console.log(this)
// }
// // video.play();
// video.stop();
// video.showTags();

//changing this
// function playVideo(a,b) {
//     console.log(this);
// }
// playVideo.call({name: 'Madhav'},1,2)
// playVideo.apply({name: 'Madhav1'},[1,2])
// playVideo.bind({name: 'Madhav2'})();

//sum of aruguments

// function sum(...items) {
//     console.log(items.length)
//     if(items.length === 1 & Array.isArray(items[0]))
//     items = [...items[0]]
//     return items.reduce((a,b) => a+b)
// }
// console.log(sum([1,2,3,4]))

//OPPS

//Defining an object
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 2,
//     },
//     draw: function () {
//         console.log("Hello")
        
//     }
// }

// circle.draw();

//Factory function

// function circlefun(radius) {
//     return{
//         radius,
//         location: 1,
//         draw: function () {
//             console.log('Hello')
//         }
//     }
// }

// const circle = circlefun(5);

// console.log(circle.draw())

//construction function
// function Circle(radius) {
    
//     this.radius = radius;
//     let location = {x: 0,y:1};
       
//     this.draw = function () {
//         console.log('hiiii')
//     },
//     Object.defineProperty(this,'location', {
//     get: function() {
//         return location;
//     },
//     set: function(value) {
//         if(!value)
//             throw new Error("Invalid value");
//             location = value;
        
//     }
//     });
  
// }

// const another = new Circle(1);

// another.draw();
// Circle.location= 123;

// // another.location1 = 'this location';
// // another["this location"] = 'This location';

// // //delete property from object
// // delete another.location1
// // // console.log(another)

// // for(let key in another){
// //     if(typeof another[key] !== 'function')
// //     console.log(key, another[key])
// // }
// // //to display only propertyname
// // const keys = Object.keys(another);
// // console.log(keys)

// // if('radius' in another)
// // console.log('Radius is found'

// // )
// //getter and setter

//stop watch
// function stopWatch() {
//     let startTime, endTime, duration, running = 0;
//   this.start = function() {
//         if(running)
//         console.log("Already running")
//         running = true;
//         startTime = new Date();
//     };
//     this.stop = function() {
//         if(!running)
//         console.log('Already stopped');
//         running = false;
//         endTime = new Date();
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         console.log(seconds)
//         duration += seconds;
//     };
//     this.reset = function() {
//         duration = 0;
//         startTime = null;
//         endTime= null;
//         running = false;

//     };
//     Object.defineProperty(this, 'duration',{
//         get: function () {
            
//             return duration;
//         }
//     })

// }
// const sw = new stopWatch();






