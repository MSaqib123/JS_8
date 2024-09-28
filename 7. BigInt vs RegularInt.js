//1. Max size of Regular Number in JS
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 -1)


//=====================================================
//================= 2. Big Int ====================
//=====================================================
//During ES2020  the    BigInt is interduces
//Big int is used to store largnumber of  Values
console.log(132492349123947314234324) //normal way
console.log(132492349123947314234324n) //big int by   n

//______ BigInt()  method ____
console.log(BigInt(132492349123947314234324)) //it change litle bitt result BigInt Method

//______ Operation _____
console.log(124123441243n + 2342343432n)

//type convert
let regularNumber = 50000;
let bigNumber = 40000n;
console.log(BigInt(regularNumber)+bigNumber)

console.log(bigNumber > 15)
console.log(bigNumber == 5) //flase

//Flase  (because its check datatype)
console.log(bigNumber === 40000) 

console.log(typeof bigNumber)

//and other operation can be done but   if  === this then type issue will come