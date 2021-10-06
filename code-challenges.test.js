// // ASSESSMENT 2: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { test } = require("picomatch")
// const { describe } = require("yargs")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest


//  --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
Psuedo Coding for test:
Write out the basic outline for the test describe(), it(), and expect ()
Our functions name is going to be "dividedByThree"
We'll write that it's a function that takes a number as an argument and checks if it's divisible by 3.
and we'll tell the machine to expect that number will be divisible by three.

// // a) Create a test with expect statements for each of the variables provided.

describe(dividedByThree, ()=> {
    it('is a function that takes a number as an argument and checks if it is divisable by 3', ()=> {
    expect(dividedByThree(9)).toEqual(3)
    })
    })
Tested and not approved for the right reasons I hope!


PsuedoCoding:
I'm naming this test "dividedByThree" so I will start the test by pugging in "dividedByThree"
Then I will explain that it's function is to check for numbers divisable by 3
Then I will will write that the outcome of "dividedByThree"should equal whatever number I plug "is divisible or not divisable by 3."

test:
psuedo code:
captins log test number 5 finally works....
just forgot some string interpolation on the return, also forgot to make it dynamic and to expect an outcome that might be false.. no big. 

describe(dividedByThree, ()=> {to 
   it("is a function that takes a number as an argument and checks if it is divisable by 3", ()=> {
   expect(dividedByThree()).toEqual(`${num1} is divisible by three`)
   expect(dividedByThree()).toEqual(`${num1} not divisible by three`)
   })
   }) 

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.
//
Psuedo coding:
first we define our function "dividedByThree"
then we write the if with an equation that will determin if our variable can be evenly divided by three. 
we have it return with a string interpolation that states it's true.
then we make an else with a string interpolation that says it is not. 

The code:
const dividedByThree = () => {
   if(num1 % 3 === 0){
   return `${num1} is divisible by three`

   }else {
      return  `${num1}not divisible by three`
   }
}  
    describe(dividedByThree, ()=> {
        it("is a function that takes a number as an argument and checks if it is divisable by 3", ()=> {
        expect(dividedByThree()).toEqual(`${num1} is divisible by three`)
        expect(dividedByThree()).toEqual(`${num1} not divisible by three`)
        })
        }) 


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

 // a) Create a test with expect statements for each of the variables provided.
Psuedo coding:
Our test id going to run a function called "stringCapitalizer"
It is going to take our array of strings and return it with the zeroeth index of each string capitalized, then join the string back together.

describe("stringCapitalizer", () => {
test("returns an array with all the strings at their 0 index capitalized", () => {
expect(stringCapitalizer(randomNouns1)).toEqual(["Streetlamp Potato Teeth Conclusion Nephew"])
})
})

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.
Psuedo coding:
we are going to need to access the string in our array 
we need to split the strings so we can gain access to index 0 of each string in each array.
we need to use the built in function .toUpperCase on each of our srings on the 0 index. only
 then we need to join the array back together. 
// Psuedo Coding:
first we creat a funtion called "stringCapitalizer"
then we'll use the built in method .map to access the zeroeth value of each string in our array. 
then we will return the string back together 

const stringCapitalizer = (array) => {
let allNouns = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
})
return allNouns.join([""])
}
console.log(stringCapitalizer(randomNouns1));

// // // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // // a) Create a test with expect statements for each of the variables provided.
Pseudo coding:
name function firstVowel
parameter: string
iterate, using a for loop to look at ach character in the sting
conditional statement - looking to see if one of the characters is a vowel.
logical orr || to check for vowels.

describe(firstVowel, () => {
  test("create a function that takes in a string and logs the index of the first vowel", () => {
    var vowelTester1 = "learn"
    // // // Expected output: 1
    var vowelTester2 = "academy"
    // // Expected output: 0
    var vowelTester3 = "challenges"
    // // Expected output: 2
     expect(firstVowel(vowelTester1)).toEqual(1)
     expect(firstVowel(vowelTester2)).toEqual(0)
     expect(firstVowel(vowelTester3)).toEqual(2)
  })
 })

// var vowelTester1 = "learn"
// // // // Expected output: 1
// var vowelTester2 = "academy"
// // // Expected output: 0
// var vowelTester3 = "challenges"
// // // Expected output: 2

// // // b) Create the function that makes the test pass.
Psuedo coding:
We need to write a function that will itterate through a string until it returns an (a, e, i, o, u)
Then we need it to log the index of the vowel it returns. 
We can do this using the built in function .map
var meVowels = ['a', 'e', 'i', 'o', 'u']

const illBuyAVowel = (String) => {
    if (String.includes(meVowels)) {
   return (String.map(String.indexOf)
    }   
}

console.log(illBuyAVowel(vowelTester1));

Psuedo coding:
This didn't work, and I ran out of time. 


const firstVowel = (string) => {
    for (let index = 0; index < array.length; index++) {
        if(string[i] === 'a' || string [i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
           return i
        }
        
    }
}
