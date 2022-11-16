 const message = document.querySelector('.message');
 const score = document.querySelector('.score');
 const buttons = document.querySelectorAll('button');
   const winnerScores = [0,0];


   for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', startGame);
}

function startGame(e){


var player = e.target.innerText;
var computer = Math.random();

if (computer < .34){
    computer = 'Rock';
} else if (computer <= .67){
    computer = 'Paper';
} else {
    computer = 'Scissors';
}



let result = checkWinner(player, computer);


if (result === 'Player'){
    result += ' wins!';
    //update score
    winnerScores[0]++;
}

if (result === 'Computer'){
    result += ' wins!';
    winnerScores[1]++;
}

if (result === 'Draw'){
    result += '. It\'s a tie!'
}

score.innerHTML = 'Player:  ' + winnerScores[0]+ '  Computer:  ' + winnerScores[1] ;

messenger('Player: ' + player + ' , Computer: ' + computer + '<br>' + result);


}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}




