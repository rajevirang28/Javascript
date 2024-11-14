// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Virang",
    [mySym]: "mykey1",
    age: 19,
    location: "Pune",
    email: "vkraje28@gmail.com",
    isloggedIn: false,
    lastloginDays: ["Monday", "Sunday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(typeof JsUser[mySym])

JsUser.email = "virang28@gmail.com"
// Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello World")
}

JsUser.greetingtwo = function(){
    console.log(`Hello World, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())