console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable.

let actNum = 8;

let gueNum = prompt("What is the number?");

if (gueNum > actNum) {
  console.log("Too high");
} else if (gueNum < actNum) {
  console.log("Too low");
} else {
  console.log("Congratulations!!!");
}

let birthMonth = prompt("What is your birth month?");


switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
  break;
  
  case "March":
  case "April":
  case "May":
    console.log("Spring");
  break;
  
    case "June":
  case "July":
  case "August":
    console.log("Summer");
  break;
  
  case "September":
  case "October":
  case "November":
    console.log("Fall");
  break;
  
    default:
    console.log("Month not recognized") 
    
}
 

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;  
  case "XL":
    size = "Extra Large"
    break;
  default: 
  size = "One Size Fits All"

}
 
switch (colorId) {
  case "BL":
    color = "Black"
    break;
  case "RD":
    color = "Red"
    break;
  case "PU":
    color = "Purple";
    break;
  default: 
    color = "White"
    
  }

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt"
    break;
  case "03":
    type = "Long Sleeve"
    break;
  case "04":
    type = "Sweat Shirt"
    break;
  default:
    type = "Other"

  }

  console.log(`Product: ${size} ${color} ${type}`);

