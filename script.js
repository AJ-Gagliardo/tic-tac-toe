









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
    player1:0,
    player2:'X'
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

    for(i=0;i<Gameboard.columns;i++){
        for(j=0;j<Gameboard.rows;j++){
          
                board[i][j].textContent = ''
            }
           
        };
        setTimeout(
            function(){
                activePlayer = 1;
                txtDisplay.textContent = `Current Turn Player${activePlayer}` 
            }, 1500
        )

   
    }
    


//  function to mark one of the cells

let activePlayer = 1;




function select(row, column){

if(Gameboard.board[row][column] === 0){ //checks if the cell is empty or not

    Gameboard.board[row][column] = activePlayer;
    board[row][column].textContent = activePlayer === 1 ? assignToken.player1 : assignToken.player2;

    setTimeout(
function(){

    checkColumns();
    checkRows();
    checkDiagonal();
}
    , 500)
    activePlayer===1 ? activePlayer = 2 :  activePlayer =1; // changes the turn to the other player once the player do a move
    txtDisplay.textContent = `Current Turn Player${activePlayer}` 
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
            // return Gameboard.board[row][0]; // Player 1 or 2 wins
            txtDisplay.textContent = `Player${Gameboard.board[row][0]} wins`;
            alert(`Player${Gameboard.board[row][0]} wins`);
            resetBoard();
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
                // return Gameboard.board[0][col];
                txtDisplay.textContent = `Player${Gameboard.board[0][col]} wins`;
                alert(`Player${Gameboard.board[0][col]} wins`);
                resetBoard();

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
        // return Gameboard.board[0][0];
        txtDisplay.textContent = `Player${Gameboard.board[0][0]} wins`;
        alert(`Player${Gameboard.board[0][0]} wins`);
        resetBoard();
    }
    else if(
        Gameboard.board[0][2] !== 0 &&
        Gameboard.board[0][2] == Gameboard.board[1][1] &&
        Gameboard.board[0][2] == Gameboard.board[2][0]
    ){
        // return Gameboard.board[0][2];
        txtDisplay.textContent = `Player${Gameboard.board[0][2]} wins`;
        alert(`Player${Gameboard.board[2][2]} wins`);
        resetBoard();
    }


}


// also i guess i am ready for putting ui inside this


//  Players


function createPlayer(controller){
    return {
    controller,

}
}


//  Dom Constants for main menu

const player1 = createPlayer('human');
const player2 = createPlayer('human');


const leftPlayer = document.getElementById('player1-human');
const leftBot = document.getElementById('player1-bot');


const rightPlayer = document.getElementById('player2-human');

const rightBot = document.getElementById('player2-bot');

const leftImg = document.getElementById('leftImg');

const rightImg = document.getElementById('rightImg');


const startGame = document.getElementById('startButton');


const mainMenu = document.getElementById('mainMenu');
const gameMenu = document.getElementById('gameUI');




// Event Listeners for the main menu


// changes the player 1 controller between human and Bot
leftPlayer.addEventListener('click', ()=>{
    if(player1.controller === 'human') {
        return} 
    else {
        player1.controller='human';
        leftBot.classList.remove('selected');
        leftPlayer.classList.add('selected');
        leftImg.src = 'img/person2.png'
       
    }
});

leftBot.addEventListener('click',()=>{
    if(player1.controller==='bot'){
        return
    }
    else{
        player1.controller='bot';
        leftPlayer.classList.remove('selected');
        leftBot.classList.add('selected');
        leftImg.src = 'img/bot.png'
    }
});


// changes the player2 controller between human and Bot
rightPlayer.addEventListener('click', ()=>{
    if(player2.controller==='human'){
        return;
    }
    else{
        player2.controller='human';
        rightPlayer.classList.add('selected');
        rightBot.classList.remove('selected');
        rightImg.src = 'img/person2.png';
    }
});

rightBot.addEventListener('click',()=>{
    if(player2.controller==='bot'){
        return;
    }
    else{
        player2.controller='bot';
        rightPlayer.classList.remove('selected');
        rightBot.classList.add('selected');
        rightImg.src='img/bot.png';
    }
})

startGame.addEventListener('click',()=>{
    mainMenu.classList.add('hide');
    gameMenu.classList.remove('hide')


})


// Actual game UI

const txtDisplay = document.getElementById('txtDisplay');
console.log(txtDisplay)

const cells = document.querySelectorAll('.cell');
console.log(cells); 

// for(i=0; i<cells.lenght; i++){
    
// }

const board = [
    [cells[0],cells[1],cells[2]],
    [cells[3],cells[4],cells[5]],
    [cells[6],cells[7],cells[8]]
]
;




startBoard()



for (let i = 0; i < Gameboard.columns; i++) {
    for (let j = 0; j < Gameboard.rows; j++) {
        // Create a function that captures the current values of i and j
        (function (row, column) {
            board[row][column].addEventListener('click', () => {
                select(row, column);
                console.log(`${row},${column}`);
            });
        })(i, j); // Immediately invoke the function with the current i and j values
    }
}
    


// Bot opponent


// logic would be select randmm [i][u] and if board [i][u] === 0 then select(i,u)
// if false keep selecting other i,u


// function getRandomNumber(){
//     return Math.floor(Math.random()*3);

// }

// function getTwoRandom(){

//     // const i = getRandomNumber();
//     // const j = getRandomNumber();
//     // return {i,j}

// }

// logic should be like this:

// while board[i][j] 

// function BotSelection(){

// let twoRandom = {i:getRandomNumber(),
//      j:getRandomNumber()};

//   while(board[twoRandom.i][twoRandom.j] !== 0){
//     twoRandom = {i:getRandomNumber(),j:getRandomNumber()};
//   }
  
//   return twoRandom;

// }

//loop approach is taking too much time to give  anumber I will try making a list of available cells and then pick somethign frokm it



function BotSelection(){

    const availableCells=[]
    
    for (i=0;i<Gameboard.rows;i++){
    for (j=0;j<Gameboard.columns;j++){
            if(Gameboard.board[i][j] === 0){
                availableCells.push({i,j})
            }
        }
    }

    const randomPair = Math.floor(Math.random()*availableCells.length);
    botRandom = availableCells[randomPair];
    select(botRandom.i, botRandom.j);


}