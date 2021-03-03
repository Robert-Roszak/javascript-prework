let computerMove = 'kamień';
let playerMove ='papier';

printMessage('Zagrałem ' + computerMove + '! Twój ruch to ' + playerMove + ' i przegrałem :(');

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

// Additional calculation - random number in the range 11-19
// let randomNumber = Math.floor(Math.random() * 9 + 11);
// printMessage('Liczba przykładowa to: ' + randomNumber);