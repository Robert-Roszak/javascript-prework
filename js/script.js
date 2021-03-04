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

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);

    if (argComputerMove == argPlayerMove){
        return('Remis!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return('Ty wygrywasz');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return('Ja wygrywam');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return('Ja wygrywam');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return('Ty wygrywasz');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return('Ja wygrywam');
    }
    else if (argComputerMove =='nożyce' && argPlayerMove == 'kamień'){
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