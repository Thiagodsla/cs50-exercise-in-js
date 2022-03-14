// EDABIT.COM EXERCISES


// function processData(inputString) {
//     // This line of code prints the first line of output
//     console.log("Hello, World.");
    
//     // Write the second line of output that prints the contents of 'inputString' here.
//     console.log(inputString)
// }


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });

//========================================================================

// function numberSquares(n) {	
// 	if (n == 0 || n == 1){
// 		return n
// 	} else {
//         arr = []
//         for ( i = 2 ; i <= n; i++){
//             arr.push(i)
//         }
//         console.log(arr)
//         //arr = [2, 3, 4]

// 		const result = arr.reduce((acumulador, currentValue) => {
//             return currentValue*currentValue + acumulador
//         }, 1);
        
//         return result
// 	}	
// }
// numberSquares(2)


// // If n = 2 =>    2^2 + 1 = 4 + 1 = 5
// // If n = 3 =>    3^2 + ACUMULADOR = 9 + 5 = 14
// // If n = 4 =>    4^2 + 14 = 16 + 14 = 30  
// // If n = 5 =>    5^2 + resposta(30) 
// // If n = 6 =>    6^2 + resposta


//========================================================================


// function detectWord(str) {
	
    
//     var re = 
//     var str = 'UcUNFYGaFYFYGtNUH';
//     str.replace(re, '$2, $1'); // "Smith, John"
//     RegExp.$1; // "John"
//     RegExp.$2; // "Smith"


//     const text = "UcUNFYGaFYFYGtNUH";
//     const regex = /[^A-Z]+/g
//     console.log(text.replace(regex, ""))

// }

// detectWord("UcUNFYGaFYFYGtNUH")


//========================================================================


// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

// shiftToLeft(10, 3)
// function shiftToLeft(x, y) {
//     return x * Math.pow(2, y)
// }

// Left shift (<<) 
// const a = 10;         // 00000000000000000000000000000101
// const b = 3;         // 00000000000000000000000000000010

// console.log(a << b); // 00000000000000000000000000010100
// // expected output: 20


//========================================================================



Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
Notes
Your function should return a function, not a string.


TESTS
const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

Test.assertEquals(f1(), "apple")
Test.assertEquals(f2(), "pear")
Test.assertEquals(f3(), "")

ANSWER

function redundant(str) {
	return () => str
}


//========================================================================


let promise = new Promise( (resolve, reject) => {
    setTimeout(( ) => {
       resolve("edabit")
    }, 1000)
  })


//========================================================================

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true


If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
	number = num.toString()
	let num1 = number[1] + number[0]
	
	if(num >= num1){
		return true
	}else{
		return false
	}
}


function largestSwap(num) {
	return num / 10 > num % 10
}

//========================================================================
AINDA PRECISO TESTAR 

https://edabit.com/challenge/iwdZiFucR5wkQsFHu
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		// Write code here!
		this.p1.age > this.p2.age
	}
}


p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."






