// This file was created for javascript part 2 class

// First exercice: Create an array prototype to sort two strings by longest

function sortLongestString(a,b){
    
    return b.length - a.length;
}

var yourArray = ["Allo","Bonjour"];

yourArray.sort(sortLongestString);