let playerScore = 0;
let computerScore = 0;

function Random(playerMove) {
    const win = document.querySelector('.wl');
    const resultDisplay = document.querySelector('.result');
    const playerScoreDisplay = document.querySelector('.player');
    const computerScoreDisplay = document.querySelector('.computer');

    const emotes = ['✌🏻', '🖐🏻', '👊🏻'];
    const randomIndex = Math.floor(Math.random() * emotes.length);
    const computerMove = emotes[randomIndex];

    console.log('Computer move:', computerMove);

    let result = '';
    if ((playerMove === 'paper' && computerMove === '👊🏻') ||
        (playerMove === 'rock' && computerMove === '✌🏻') ||
        (playerMove === 'scissors' && computerMove === '🖐🏻')) {
        playerScore++;
        result = 'You win!';
    } else if ((playerMove === 'paper' && computerMove === '✌🏻') ||
        (playerMove === 'rock' && computerMove === '🖐🏻') ||
        (playerMove === 'scissors' && computerMove === '👊🏻')) {
        computerScore++;
        result = 'Computer wins!';
    } else {
        result = 'It\'s a tie!';
    }

    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}