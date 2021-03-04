let playerScore = 0;
let computerScore = 0;

// printScore('Wynik komputera to: ' + computerScore + ', a gracza to: ' + playerScore);

function playGame(argGame) {    
    /*nie moznaby sie odnosic do argGame zamist ustalac ze argGame=playerInput? */
    let playerInput = argGame;
    clearMessages();

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        else if(argMoveId == 2){
            return 'papier';
        }
        else if(argMoveId == 3){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

   // printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

   // printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        console.log('moves:', argComputerMove, argPlayerMove);

        if (argComputerMove == argPlayerMove){
            return('Remis!');
x
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            ++playerScore;
            return('Ty wygrywasz');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            ++computerScore;
            return('Ja wygrywam');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            ++computerScore;
            return('Ja wygrywam');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            ++playerScore;
            return('Ty wygrywasz');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            ++computerScore;
            return('Ja wygrywam');
        }
        else if (argComputerMove =='nożyce' && argPlayerMove == 'kamień'){
            ++playerScore;
            return('Ty wygrywasz');
        }
        else if (argPlayerMove == 'nieznany ruch'){
            return('Oszukujesz? ;)');
        }
        else {
            return('Coś poszło nie tak ;x');
        }
    }
    
    printMessage(displayResult(computerMove,playerMove));
    console.log('Wynik komputera to: ' + computerScore + ', a gracza to: ' + playerScore);
    printScore('Wynik komputera to: ' + computerScore + ', a gracza to: ' + playerScore);
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1)
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2)
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3)
});