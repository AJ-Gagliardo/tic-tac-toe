









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
    for(let i=0; i>Gameboard.rows; i++){
        for(let j=0;j>Gameboard.columns; j++){
            Gameboard.board[i][j] = 0;
        }
    }
}

//  function to mark one of the cells

let activePlayer = 1;

function select(row, column){

Gameboard.board[row][column] = activePlayer;

activePlayer===1 ? activePlayer = 2 :  activePlayer =1

}

// Do something taht checks if that cell si empty or not

// something to take turns

// How the gae ends + Something to reset the cells once the game finishes
