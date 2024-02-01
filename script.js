









// To Do
/* many of the comments her ewill be to do list, I will be writting code below
some of the parts . I am trying to write things I need to do to avoid losing time trying to 
remember what I should do to make it work */


// make the game work in JS only first

// make a grid for the tic tac toe game

const Gameboard = {
    rows: 3,
    columns: 3,
    board: [],

}




//  Set value for Empty Cells, and when a player selects one oftohse cells


const assignToken= {
    unassigned:0,
    player1:1,
    player2:2
}

function startBoard(){
    for(let i=0; i<Gameboard.rows;i++){
        Gameboard.board[i]=[];
        for(let j=0; j<Gameboard.columns; j++){
            Gameboard.board[i][j]= 0;
        }
    }

}

function resetBoard(){
    // for(let i=0; i<Gameboard.rows; i++){
    //     Gameboard
    //     for(let j=0;j>Gameboard.columns; j++){
    //         Gameboard.board[i][j] = 0;
    //     }
    // }
    Gameboard.board=[];
    startBoard();
    
}

//  function to mark one of the cells

let activePlayer = 1;




function select(row, column){

if(Gameboard.board[row][column] === 0){ //checks if the cell is empty or not

    Gameboard.board[row][column] = activePlayer;
    // activePlayer===1 ? activePlayer = 2 :  activePlayer =1; // changes the turn to the other player once the player do a move
}

else{
    console.log('sorry cell already taken');
    return; // doesn't let you put your token if cell is taken
}

}






function checkRows() {
    for (let row = 0; row < Gameboard.rows; row++) {
        if (
            Gameboard.board[row][0] !== 0 &&
            Gameboard.board[row][0] === Gameboard.board[row][1] &&
            Gameboard.board[row][0] === Gameboard.board[row][2]
        ) {
            return Gameboard.board[row][0]; // Player 1 or 2 wins
        }
    }
    return 0; // No winner in rows
};



function checkColumns(){
    for(let col=0;col<Gameboard.columns;col++){
        if(

            Gameboard.board[0][col] !==0 &&
            Gameboard.board[0][col] === Gameboard.board[1][col] &&
            Gameboard.board[0][col] === Gameboard.board[2][col] 
            ){
                return Gameboard.board[0][col];
            }

    }
    return 0;

}

function checkDiagonal(){
    if(
        Gameboard.board[0][0] !==0 &&
        Gameboard.board[0][0] === Gameboard.board[1][1] &&
        Gameboard.board[0][0] === Gameboard.board[2][2]
    ){
        return Gameboard.board[0][0];
    }
    else if(
        Gameboard.board[0][2] !== 0 &&
        Gameboard.board[0][2] == Gameboard.board[1][1] &&
        Gameboard.board[0][2] == Gameboard.board[2][0]
    ){
        return Gameboard.board[0][2]
    }


}


// also i guess i am ready for putting ui inside this


//  Players


function createPlayer(name, controller){
    return {
        name,
    controller,

}
}

const player1 = createPlayer('Anto', 'human');



//wondering if its a good idea to do factories for ui, will have to check that later