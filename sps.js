let user = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
} 

const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user++;
        userScorePara.innerText = user;
        msg.innerText = `You Win! Your ${userChoice} beats Comp ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computer++
        compScorePara.innerText = computer;
        msg.innerText = `Computer Win! Comp ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp Chocie =", compChoice);

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissor' ? false : true;
        } else if (userChoice === 'scissor') {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});