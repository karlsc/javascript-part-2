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