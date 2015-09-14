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

// Create a function that will take an operation and two numbers and will return function

function operationMaker(operation){
    
    function doingTheMaths(a,b){
        
        switch(operation){
            
            case "add":
                return a + b;
                
            case "sub":
                return a - b;
                
            case "mult":
                return a * b;
                
            case "div":
                return a / b;
        }
    }
    
    return doingTheMaths;
}

var adder = operationMaker("add");
var sum = adder(5, 10); // 15

var multiplier = operationMaker("mult");
var product = multiplier(5, 10); // 50

var divider = operationMaker("div");
var resDiv = divider(50,2); // 25

var substracter = operationMaker("sub");
var resSub = substracter(17,5); // 12

console.log(sum);
console.log(product);
console.log(resDiv);
console.log(resSub);