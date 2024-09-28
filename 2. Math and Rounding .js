//=========================================================
//======================== 1. Math =========================
//=========================================================
//______ 1. Math.sqrt() __________
console.log(Math.sqrt(25))
console.log(25 ** (1/2)) 
console.log(8 ** (1/3))  //quberoot

//______ 2. Math.max() __________
console.log(Math.max(5,18,23,44,55,78))
console.log(Math.max(5,18,23,44,55,'78'))
console.log(Math.max(5,18,23,'44px',35,11))

//______ 3. Math.min() __________
console.log(Math.min(5,18,23,44,35,11))

//______ 4. Math.random __________
console.log(Math.random())

//--- random with in Rang ---
console.log(Math.trunc(Math.random()*6))  // number b/w  0 to 5

//--- random with in Rang ---
console.log(Math.trunc(Math.random()*6 + 1))  // number b/w  0 to 6

//--- random with Max and Min Range ---
const random = (min , max) => Math.trunc(Math.random()*(max-min)+1)+min;
console.log(random(1,10))
console.log(random(20,40))


//============ 1. Rounding Integer =================
//Rounding the  point values

//______ 5. Math.trunc() __________
//trunc will remove   pint vlaue
console.log(Math.trunc(5.85),'trunc')
console.log(Math.trunc(5.25),'trunc')

//______ 6. Math.round() __________
//round will give   Celing, floor  base value  
console.log(Math.round(5.85),'round')
console.log(Math.round(5.25),'round')

//______ 6. Math.ceil() __________
//round will give   Celing, floor  base value  
console.log(Math.ceil(5.85),'ceil')
console.log(Math.ceil(5.25),'ceil')

//______ 6. Math.floor() __________
//round will give   Celing, floor  base value  
console.log(Math.floor(5.85),'floor')
console.log(Math.floor(5.25),'floor')

//============ 2. Rounding Decimal =================

//_____ 7. toFixed(0) ______
//its return string value
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3)) //it will add  3 value righ   2.700
console.log((2.7).toFixed(2)) //it will add  3 value righ   2.70
console.log((2.7).toFixed(4)) //2.7000

console.log(+(2.72).toFixed(4)) //2.7000

