// This is where I will be working on the warriors exercice

function Warrior(name,gender){
    
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random()*100);
}

Warrior.prototype = {
    
    fight: function() {
        
        if(this.gender === "m" || this.gender === "M" || this.gender === "male" || this.gender === "Male"){
        
            console.log(this.name+", the beautiful male, rushes to the arena with a "+this.weapon+"!");
        
        } else if(this.gender === "f" || this.gender === "F" || this.gender === "female" || this.gender === "Female"){
        
            console.log(this.name+", the beautiful female, rushes to the arena with a "+this.weapon+"!");
        
        } else {
            
            alert("Wrong gender selection.");
            console.log(this.name+", the beautiful warrior without a gender, rushes to the arena with a "+this.weapon+"!");
        }
    },
    
    faceoff: function(opponent) {
        
        if(this.power > opponent.power){
            
            console.log(this.name+" hits "+opponent.name+" first with a "+this.weapon+"!");
            console.log(this.name+" reaches a power of "+this.power+"!");
            console.log(opponent.name+" is dead. "+this.name+" is the winner!");
            
        } else if(opponent.power > this.power) {
            
            console.log(opponent.name+" hits "+this.name+" first with a "+opponent.weapon+"!");
            console.log(opponent.name+" reaches a power of "+opponent.power+"!");
            console.log(this.name+" is dead. "+opponent.name+" is the winner!");
            
        } else {
            
            console.log("Both warriors reached a power of "+this.power+"!");
            console.log("They are both dead...");
        }
        
    }
    
};

var player1 = new Warrior(prompt("Name of the first warrior :"),prompt("Gender of the first warrior (M/F) :"));

player1.fight();

var player2 = new Warrior(prompt("Name of the second warrior :"),prompt("Gender of the second warrior (M/F) :"));

player2.fight();
player1.faceoff(player2);

