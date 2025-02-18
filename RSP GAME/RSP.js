
 document.addEventListener('DOMContentLoaded', function () {

    const choices = document.querySelectorAll('.choice');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const message = document.getElementById('msg');

    let userScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        const computerChoices = ['ROCK', 'PAPER', 'SCISSORS'];
        const randomNumber = Math.floor(Math.random() * 3);
        return computerChoices[randomNumber];
    }

    // Function to convert choice ID to word
    function convertToWord(choice) {
        return choice.charAt(0) + choice.slice(1).toLowerCase();
    }

    // Function to handle win
    function win(userChoice, computerChoice) {
        userScore++;
        userScoreDisplay.textContent = userScore;
        message.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    }

    // Function to handle lose
    function lose(userChoice, computerChoice) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        message.textContent = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`;
    }

    // Function to handle draw
    function draw(userChoice, computerChoice) {
        message.textContent = `It's a draw! You both chose ${convertToWord(userChoice)}.`;
    }

    // Function to compare choices
    function game(userChoice) {
        const computerChoice = getComputerChoice();

        switch (userChoice + computerChoice) {
            case 'ROCKSCISSORS':
            case 'PAPERROCK':
            case 'SCISSORSPAPER':
                win(userChoice, computerChoice);
                break;
            case 'ROCKPAPER':
            case 'PAPERSCISSORS':
            case 'SCISSORSROCK':
                lose(userChoice, computerChoice);
                break;
            case 'ROCKROCK':
            case 'PAPERPAPER':
            case 'SCISSORSSCISSORS':
                draw(userChoice, computerChoice);
                break;
        }
    }

    // Event listeners for choices
    choices.forEach(choice => {
        choice.addEventListener('click', function () {
            const userChoice = this.getAttribute('id');
            game(userChoice);
        });
    });

});
