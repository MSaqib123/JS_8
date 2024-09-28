//=======================================================
//========================= Date Time =======================
//=======================================================
//when we build realword application then 1 type of data is mostly used  
///--- is call  DateTime -----
//Example : Customer Buy some thing.
//Customer Buy date , product expire date , Customer DOB , Customer ...... exe

//1. Create a Date
const now = new Date();
console.log(now)

//2.Fixed Date
console.log(new Date('Sat Aug 6 2024 13:00:54'))
console.log(new Date('December 24 2024'))

//3. date by Number
console.log(2037,10,19,15,23,5)
console.log(2037,10,31)  //10 has 30 days  but it will automaticaly corrected this  by js

//4. Date from the beinging of Js
console.log(new Date(0))

//5. Date By Calculation by TimeStemp
//add 3 days more to current date
console.log(3*24*60*60*1000 ,"3 days")
console.log(new Date(3*24*60*60*1000))


console.clear()
//=======================================================
//========================= Date =======================
//=======================================================
const future = new Date(2037, 10, 19, 15, 23);
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate()) //day of month
console.log(future.getDay()) //day of week
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.getMilliseconds())
//___ TimeZone base date time ___
console.log(future.toISOString() , 'very usfule')
//___ Get only timeStemp ___
console.log(future.getTime())
console.log(new Date(2142238980000))

//___ Get only dateStemp ___
console.log(Date.now())
console.log(new Date(1723893993156))

//=======================================================
//===================== Set Methods =====================
//=======================================================
//there so many so we will not go futher deepoly  just for information 
future.setFullYear(2040)
future.setMonth(11)
console.log(future)