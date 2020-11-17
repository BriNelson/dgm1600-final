

/* eslint no-console: ["error", { allow: ["warn", "error", "log", "alert"] }] */

/* eslint-env browser */
/*jslint devel: true */
// This is littered with Magic numbers






var myGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];// grid array of 10x10




var hitArray = [];
var missArray = [];
var subArray = [];
var battleArray = [];
var carrierArray = [];
var destroyArray = [];



function genRandom() {
    'use strict'; //random num gen used for row in project
    var rndNumber = Math.floor(Math.random() * 10) + 0;//span of array
    return rndNumber;
}



// myFunction gets user input from the dom
function myFunction() {
    'use strict';
    var x, y;
    x = document.getElementById('myText').value;
    y = Number(x) - 1;// minus on so the user input matchs with array
    return y;
}


function secondInput() {//needs to be renamed
    'use strict';
    var x, y;
    x = document.getElementById("columnInput").value;
    y = Number(x) - 1;// minus on so the user input matchs with array
    return y;
}





function placeShipFive() {
    'use strict';
    var i, firstPos, j;
    
    j = genRandom();//row
    i = 0;//column
   
    
    
    firstPos = Math.floor(Math.random() * (myGrid.length - 4));// minus 4 makes it so grid does not go over the grid
  
    if (myGrid[j][firstPos] === 0 && myGrid[j][firstPos + 1] === 0 && myGrid[j][firstPos + 2] === 0 && myGrid[j][firstPos + 3] === 0 && myGrid[j][firstPos + 4] === 0) {console.log("still good");
    // if makes it so boats dont overlap by checking that the potential spots equal 0
        for (i = firstPos; i < firstPos + 5; i += 1) {// loops through to make ship as long as the 5 in this case
       
            myGrid[j][i] = 5;// j is the row in this case, and i is the start point for the row
        }
        } else {console.log('not good');
            placeShipFive(); }// function called again to retry placeing the ship, needs to be fixed or it could recurse forever
}

//seeing if my git works



/* --- nearly the same they could maybe shortened into a function but I dont know how --- */

function placeShipFour() {
    'use strict';
    var i, firstPos, j;
    
    j = genRandom();
    i = 0;
    
   
    
    
    firstPos = Math.floor(Math.random() * (myGrid.length - 3));
  // loads array with only 3 number ones
    if (myGrid[j][firstPos] === 0 && myGrid[j][firstPos + 1] === 0 && myGrid[j][firstPos + 2] === 0 && myGrid[j][firstPos + 3] === 0) {console.log("still good");
    
        for (i = firstPos; i < firstPos + 4; i += 1) {
       
            myGrid[j][i] = 4;
        }
        } else {console.log('not good');
            placeShipFour(); }

}







function placeShipThree() {
    'use strict';
    var i, firstPos, j;
    
    j = genRandom();
    i = 0;
    
   
    
    
    firstPos = Math.floor(Math.random() * (myGrid.length - 2));
  
    if (myGrid[j][firstPos] === 0 && myGrid[j][firstPos + 1] === 0 && myGrid[j][firstPos + 2] === 0) {console.log("still good");
    
        for (i = firstPos; i < firstPos + 3; i += 1) {
       
            myGrid[j][i] = 3;
        }
        } else {console.log('not good');
            placeShipThree(); }
    

}






function placeShipTwo() {
    'use strict';
    var i, firstPos, j;
    
    j = genRandom();
    i = 0;
    
   
    
    
    firstPos = Math.floor(Math.random() * (myGrid.length - 1));
    if (myGrid[j][firstPos] === 0 && myGrid[j][firstPos + 1] === 0) {console.log("still good");
    
            for (i = firstPos; i < firstPos + 2; i += 1) {
       
            myGrid[j][i] = 2;
        }
        } else {console.log('not good');
            placeShipTwo(); }
    

}








// placeship calls all the functions that place ships on grids ther is probably a better way to do this
function placeShip() {
    'use strict';
    placeShipFive();
    placeShipFour();
    placeShipThree();
    placeShipTwo();
    console.log(myGrid);
}




/* --- this could be the shortened I think but  I don't know how --- */

// main test user input against numbers in grid
function main() {
    'use strict';
    var columInputPlusOne, rowInputPlusOne, row, column, hitString;
        
        
    columInputPlusOne = secondInput() + 1; // adds one back to string so out matchs what input
    rowInputPlusOne = myFunction() + 1;
      
    row = rowInputPlusOne.toString(); // user input converted to string
    column = columInputPlusOne.toString();
      
    hitString = ' (' + row + ', ' +  column + ')';// puts the two inputs together as string
     
    
    
    if (myFunction() > 10 || myFunction() < 0 || secondInput() > 10 || secondInput < 0) {//checks if input is valid
        alert('pick a number 1-10');
    } else if (hitArray.includes(hitString) || missArray.includes(hitString)) {// checks the arrays that keep track of what was already guessed 
        alert('already guessed this one, guess again');
        
    } else if (myGrid[myFunction()][secondInput()] === 0) { // checks if user input is miss
        alert('miss, guess again');
        missArray.push(hitString);// loads hit coordinates to miss
        document.getElementById('missCount').innerHTML = missArray;
    } else if (myGrid[myFunction()][secondInput()] === 2 || myGrid[myFunction()][secondInput()] === 3 || myGrid[myFunction()][secondInput()] === 4 || myGrid[myFunction()][secondInput()] === 5) {
        alert('hit');// checks to see if userinput is a hit
        
        if (myGrid[myFunction()][secondInput()] === 3) {// checks to see which ship is found
      
            hitArray.push(hitString);// puts coordinates to main hit counter
            subArray.push(hitString);// subarray keeps track of how many hits the sub has taken
            document.getElementById('hitCount').innerHTML = hitArray;//prints hit count to dom
            if (subArray.length === 3) { document.getElementById('sub').innerHTML = "Submarine"; }
      // there is probably a better way to do this
        } else if (myGrid[myFunction()][secondInput()] === 4) {
      
            hitArray.push(hitString);
            battleArray.push(hitString);
            document.getElementById('hitCount').innerHTML = hitArray;
            if (battleArray.length === 4) {document.getElementById('battleship').innerHTML = "Battleship"; }
      
        } else if (myGrid[myFunction()][secondInput()] === 5) {
      
            hitArray.push(hitString);
            carrierArray.push(hitString);
            document.getElementById('hitCount').innerHTML = hitArray;
            if (carrierArray.length === 5) { document.getElementById('aircraft').innerHTML = "Aircraft Carrier"; }
      
        } else if (myGrid[myFunction()][secondInput()] === 2) {
      
            hitArray.push(hitString);
            destroyArray.push(hitString);
            document.getElementById('hitCount').innerHTML = hitArray;
            if (destroyArray.length === 2) {document.getElementById('destroyer').innerHTML = "Destroyer"; }
        }
  
        
        if (destroyArray.length === 2 && carrierArray.length === 5 && battleArray.length === 4 && subArray.length === 3) {
            document.getElementById('win').innerHTML = "You Win";
        }
    }
    //console.log(myGrid[myFunction()][secondInput()])
    
 //console.log (myFunction());
//console.log(secondInput()); 
}


















