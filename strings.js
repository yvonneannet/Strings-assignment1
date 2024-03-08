
// 1. Extract the last four characters from the string below;"extravaganza"

let word = "extravaganza";
letLastFourchars = word.slice(-4);
console.log({letLastFourchars});

//2. Insert the fourth string at the index of the below variable: "eat" const food ="The quick fox jumped over the lazy dog"

const food = " The quick fox jumped over the lazy dog"
let newFood = food.slice(0,4) + "eat" + food.slice(4);
console.log({newFood});

//3. Count how many times the following string appears in the string variable: 
//1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";
let countThe = story.toLowerCase().match(/the/g).length;
console.log('"the" appears:', countThe, 'times');

let countBrown = story.match(/brown/g) ? story.match(/brown/g).length : 0;
console.log('"brown" appears:', countBrown, 'times');


//4. Using JavaScript, find the following words from the following strings:
//1. "are"const string1 = "The pupils are reading in the library";
//2. "sitting"const string2 = "The child was sitting on the table before it fell"

 const string1 = "The pupils are readind in the library";
 const foundText = string1.includes("are");
 console.log({foundText});
const string2 = "The child was sitting on the table before it fell"
const foundItem = string1.includes("the");
console.log({foundItem});




//5.Convert the following strings into the specified format:
//1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

console.log("UpperCase:", "wonderful".toUpperCase());
console.log("LowerCase:", "amazing".toLowerCase()); 
console.log("LowerCase:", "UndERneath".toLowerCase());
