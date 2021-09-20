// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer:
//My answer: If you turn a string into a variable and use the built in method .split, with a parentheses and quotes, your console log is going to return your string with every letter in quotes. 

// b) Verify and explain:
// After a quick check, it does indeed return ["D","e","l","t","a"," ","2","0","2","1"] but as an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// I know the desired outcome of the equation is for the greeting to return "Hello LEARN Student!", but the const variable needs a return to work, so I'm pretty sure it's going to return an "undefind".
// b) Verify and explain:
// After running the test, without the return it came back as undefind, but once I plugged a return in right before the `Hello, ${name}!`, it logged "Hello, Learn Student!"


// --------------------3) What will this log?


var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:
// I see that the desired outcome is for us to run the numbers inside the "array" through an itteration using map, but I think we may need a const variable to get inside the "array" itself. As is, I'm not sure what it will return, maybe just the numbers in the array or undefind.
// b) Verify and explain:
//Ok, after running it, it logged the numbers inside the array. I created a const called multiplier and had it equal the variable array multBy2. then I added on the .map(==>. But what I forgot in the first response was that it needs to return somthing, and that's where you would have have it return "value" multiplied by 2. Then intead of logging the multBy2 I logged my new variable multiplier. It looked like this:


// var multBy2 = [4, 5, 6, 7, 8]
// const multiplier = multBy2.map(value => {
//     return value * 2
// })

// console.log(multiplier)
//-------> Array[8, 10, 12, 14, 16]

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer:
//Everything looks great to run a filter function, but you would definitly return all evens. 
// b) Verify and explain:
//So I ran it, and it returns [12, 14], but if I just slightly tweek it and change the value to equal value % 2 === 1 (instead of 0) It returns [11, 13, 15]


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// I'm still having trouble with classes since we just learned this today, but I know the desired outcome would be:
//student: George
//cohort: "Delta"
//year: 2021
//This is assuming the code is correct and the name is what will be changed when we created the new variable learnStudent
// b) Verify and explain:
// Object { student: "George", cohort: "Delta", year: 2021 }, Looks like the desired outcome was acheived, although, I can't in honesty say that I fully understand the "class" function YET and I just guessed in good faith that it would return the desired outcome.  

