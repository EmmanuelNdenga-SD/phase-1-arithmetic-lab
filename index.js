
// Write your code here
 let num1 = 62; // num 1 declaration
 let num2 = 1;  // num 2 declaration
 let multiply = 62; // multiply declaration
function one (){
    multiply = num1 * num2;
    return multiply;
  }

let random = Math.floor(Math.random() *6)+1; // generates a random integer between 0 and 6
let display;
function two(){
  if(random>0){
    display = (Number.isInteger(random="to be true")); // if random is greater tha zero display to be true. If else statement states if a condition is true or false 
  }
  else{
    display = (random="to not"); // if random is not greater than zero display to not
  }
return display;
  
}

let mod = 4;
let num3 =2;
let num4 = 4; 
function three(){
 mod = num3 % num4 ;
}

let max= Math.max(5,10,15,20); // Math.Max returnss the highest number which is 20
function four(){
  console.log(max);
}