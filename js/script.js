let playerScore = 0;
let computerScore = 0;

function playGame(playerInput) {    

    function getMoveName(argMoveId){
        if(argMoveId === 1) return 'kamień';
        else if(argMoveId === 2) return 'papier';
        else return 'nożyce';
    }

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove, 'messages');
        console.log('moves:', argComputerMove, argPlayerMove);

        if (argComputerMove === argPlayerMove) return 'Remis!';
        else if (
        (argComputerMove === 'kamień' && argPlayerMove == 'nożyce') ||
        (argComputerMove === 'papier' && argPlayerMove == 'kamień') ||
        (argComputerMove === 'nożyce' && argPlayerMove == 'papier')){
            ++computerScore;
            return 'Ja wygrywam';
        }
        else {
            ++playerScore;
            return 'Ty wygrywasz';
        }
    }

    // Clear messages in html //
    clearMessages();

    // Generate random computer move and convert it to string (1 -> rock)
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    console.log('Wylosowana liczba to: ' + randomNumber);

    // Convert player move to string variant
    let playerMove = getMoveName(playerInput);
    console.log('Gracz wybrał: ' + playerInput);

    // Show results in html and print the score
    printMessage(displayResult(computerMove,playerMove), 'messages');
    printMessage('Wynik komputera to: ' + computerScore + ', a gracza to: ' + playerScore, 'results');
    console.log('Wynik komputera to: ' + computerScore + ', a gracza to: ' + playerScore);
}

function resetScore() {
    console.log('Nacisnieto reset');
    playerScore = 0;
    computerScore = 0;
    clearMessages();
    printMessage('Wyniki wyzerowano :( Teraz jest ' + computerScore + ' do ' + playerScore, 'results');
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
    showBtn();
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
    showBtn();
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
    showBtn();
});

document.getElementById('reset').addEventListener('click', function() {
    resetScore();
});