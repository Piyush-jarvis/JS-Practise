const name = "Piyush"
const repocount = "50"

// console.log("Name is " + name + " and repocount is " + repocount + " value")// this is old version of string prinitng and not recommended as good practise

// Name is Piyush and repocount is 50 value output of above command

// String Interpolation : combining the variables and contants inside a string

// console.log(`Hello my name is ${name} and my repocount value is ${repocount}, this is example of string interpolation`);
//Hello my name is Piyush and my repocount value is 50, this is example of string interpolation

const exname = new String('Piyush')

console.log(exname[0],exname[3])
console.log(exname.length);
console.log(exname.charCodeAt(0));//The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string. this is case sensitive. 65-90 for A-Z and 97-122 a-z
console.log(exname.toUpperCase());