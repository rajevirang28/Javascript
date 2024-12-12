//const tinderUser = new Objects() // singleton
const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Virang",
            lastname: "Raje"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course
// console.log(instructor);

// {
//     "name": "virang",
//     "course": "js",
//     "price": "free"
// } 

