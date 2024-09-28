//==================== 1. Convert and Checking Number =======================
console.log(23 === 23.0)

//________ 1. Base 10   --- 0 to 9 ________


//________ 2. Binary base  ---  0 1 ________
//JS error
console.log(0.1 + 0.2) //it gives  0.3000004 but it should  be   0.3
console.log(0.1 + 0.2 === 0.3)


//___________ convert to Number ____________
console.log(Number('23'));

//___________ type coercion (convert by Operator) ____________
console.log(+'23');


//___________ Parsing _______________
console.log(Number.parseInt('30px')); //will check first value is number or not
console.log(Number.parseInt('e30px')); //NaN

//___________ Parsing _ System Type _______________
//System type    Binnary (0.1)  
//System Type    bse 10  (0 to 9)
console.log(Number.parseInt('30px' , 10)); //30
console.log(Number.parseInt('30px' , 2)); // NaN   (not binary)
console.log(Number.parseFloat('0.5px' , 2)); // 0.5  (binary)

//ParseFloat  for   Points values 
console.log(Number.parseInt('2.5')); 
console.log(Number.parseFloat('2.5'));

//___________ Check NaN _______________
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20'))
console.log(Number.isNaN(20/0))

//___________ Check if Value is number _______________
//Mostly used  method to check number  isInfinite
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20'))
console.log(Number.isFinite(20/0))


console.log(Number.isInteger(20))
console.log(Number.isInteger(23.0))
console.log(Number.isInteger(23/0))