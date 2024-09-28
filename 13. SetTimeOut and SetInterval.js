//========================================================
//====================== Timer ===========================
//========================================================
//we have 2 type of Timers
//__ 1. SetTime Out __
//this time Runs only 1 time after a deffined time

//__ 2. SetInterval __
//SetInterval keeep running forEver  , until we stop it

//============================
//====== 1. SetTime Out ======
//============================
//let execute some code  at some point in future
//let add interval to pizza order

const ingredients = ['olives','tomoto']//'spinach'];
const pizzaTimer =setTimeout(
    (ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`)
    ,3000,...ingredients
)
console.log('Waiting...')

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)

//============================
//====== 2. SetInterval ======
//============================
setInterval(function(){
    const now = new Date()
    console.log(now);
    console.log(`${now.getHours()}H : ${now.getMinutes()}M : ${now.getSeconds()}s`);
},1000)
