// File created for terrain exercice
// To see the map : seeTheMap(); 
// To burn a tile : burnTile();
// Tu freeze a tile : freezeTile();

var board = [];

function Tile(x,y){
    
    this.x = x;
    this.y = y;
    this.height = Math.floor(Math.random() * 3) + 1 ;
    
    var typeList = ["grass","rocks","water"];
    
    this.type = typeList[Math.floor(Math.random() * 3)];
    
    var conditionList = ["burning","normal","frozen"];
    
    this.condition = conditionList[Math.floor(Math.random() * 3)];
    
}

Tile.prototype = {
    
    freeze: function(){
        
        if(this.condition === "burning") {
            
            this.condition = "normal";
            console.log("You stop the burning on position ["+this.x+","+this.y+"].");
            
        } else if (this.condition === "normal") {
            
            this.condition = "frozen";
            console.log("You freeze the land on position ["+this.x+","+this.y+"].");
            
        } else {
            
            this.height++;
            console.log("You freeze it more on position ["+this.x+","+this.y+"], +1.");
        }
        
    },
    
    burn: function(){
        
        if(this.condition === "frozen") {
            
            this.condition = "normal";
            console.log("You melt the ice on position ["+this.x+","+this.y+"].");
            
        } else if (this.condition === "normal") {
            
            this.condition = "burning";
            console.log("You burn it on position ["+this.x+","+this.y+"].");
            
        } else {
            
            if(this.height === 0){
                
                console.log("The land on position ["+this.x+","+this.y+"] is already burned to the ground!");
                
            } else {
            
            this.height--;
            console.log("You burn it even more on position ["+this.x+","+this.y+"], -1!");
            
            }
        }
    }
};

var board = [];

function mapBuilder(){
    
    for(var i = 0 ; i < 20 ; i++){
        
        board[i] = []; 
        
        for(var j = 0 ; j < 20 ; j++){
            
            board[i][j] = new Tile(i,j) ;
        }
    }
    return seeTheMap();
}

function seeTheMap(){
    
    var row = "";
    
    for(var i = 0 ; i < 20 ; i++){
        
        for(var j = 0 ; j < 20 ; j++){
            
            row += board[i][j].height +" ";
        }
        
        console.log(row);
        row = "";
        
    }
}

mapBuilder();

function freezeTile(){

    var randomX = Math.floor(Math.random() * 19);
    var randomY = Math.floor(Math.random() * 19);
    board[randomX][randomY].freeze();
}

function burnTile(){

    var randomX = Math.floor(Math.random() * 19);
    var randomY = Math.floor(Math.random() * 19);
    board[randomX][randomY].burn();
}

// To see the map : seeTheMap(); 
// To burn a tile : burnTile();
// Tu freeze a tile : freezeTile();

