// This file was created for javascript part 2 class

// First exercice: Create an array prototype to sort two strings by longest

function sortLongestString(a,b){
    
    return b.length - a.length;
}

var yourArray = ["Allo","Bonjour"];

yourArray.sort(sortLongestString);

// Function that will sort array by longest name, then longest e-mail

function sortLongestName(a,b){
    
    return (b.name).length - (a.name).length ;
}

function sortAlphaEmail(a,b){
    
    return (a.email).localeCompare(b.email) ;
}

var yourArray = [   {name: "Karl", email: "csdf@hotmail.com"},
                    {name: "Jack", email: "dsdf@hot.com"},
                    {name: "Pat", email: "asdf_as@hotmail.com"},
                    {name: "Thomas", email: "zsdf__34@gmail.com"},
                    {name: "Johnny-O", email: "xsdf.askd@hotmail666.com"} ];
                    
var yourArray2 = [  {name: "Karl", email: "csdf@hotmail.com"},
                    {name: "Jack", email: "dsdf@hot.com"},
                    {name: "Pat", email: "asdf_as@hotmail.com"},
                    {name: "Thomas", email: "zsdf__34@gmail.com"},
                    {name: "Johnny-O", email: "xsdf.askd@hotmail666.com"} ];

console.log(yourArray.sort(sortLongestName));
console.log(yourArray2.sort(sortAlphaEmail));

// Create a function that will return the square of a number

function squareOfNumber(value){
    
    return value * value;
}

var yourArray = [2,4,6,12,3];

yourArray.map(squareOfNumber);

// Function that will square the num property of objects

function squareOfNum(value){
    
    return value.num * value.num;
}

var yourArray = [{num: 12},{num: 20},{num: 4},{num: 102}];

yourArray.map(squareOfNum);