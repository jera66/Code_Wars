// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. 
// But how clever can you be to create the most creative hello world you can think of? 
// What is a "hello world" solution you would want to show your friends?
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function greet () {
    let str  = "Hello world!"
    return str
}
console.log(greet())
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   METHOD 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numberToString(num) {
  let result = num.toString()
  return result
}
console.log(numberToString())
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   METHOD 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numberToString(num) {
    return `${num}`
  }
  console.log(numberToString())
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   METHOD 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numberToString(num) {
    let str = ' '
    str = "str " + num
    return str
  }
  console.log(numberToString())
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === "r"){
      return name + " plays banjo"
    }
    else {
      return name + " does not play banjo"
    }
    
  }
  console.log(areYouPlayingBanjo())
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function grow(x){
    let result = 1
          for (let i = 0; i < x.length; i++)
              result = result * x[i]
          return result
  }
  console.log(grow())