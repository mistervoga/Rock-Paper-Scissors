
let playerselection = prompt("Type rock, paper or scissor!");
let computerselection = computerPlay();
let computercount = 0;
let playercount = 0;


function computerPlay() {

    let array = ["rock", "paper", "scissor"];

    let random = array[Math.floor(Math.random() * array.length)]
    return random;
}

function rock() {
    if (computerselection == "rock") {
        console.log("Game Tied!");

    } else if (computerselection == "scissor") {
        console.log("You won!")
        playercount++;
    } else {
        console.log("You lost!")
        computercount++;
    }

}

function paper() {
    if (computerselection == "rock") {
        console.log("You won!");
        playercount++;
    } else if (computerselection == "scissor") {
        console.log("You lost!")
        computercount++;
    } else {
        console.log("Game Tied!")
    }

}

function scissor() {
    if (computerselection == "rock") {
        console.log("You Lost!");
        computercount++;
    } else if (computerselection == "scissor") {
        console.log("Game Tied!")
    } else {
        console.log("You won!")
        playercount++;
    }

}

function playRound(computerselection, playerselection) {
    if (playerselection == "rock") {
        rock();
    } else if (playerselection == "scissor") {
        scissor();
    } else {
        paper();
    }

}

function game() {
    while (computercount <= 5 || playercount <= 5) {
        playRound(computerselection, playerselection);
    }

    if (playercount > computercount) {
        console.log(`You Won with a score of ${playercount}`);
    } else if (playercount < computercount) {
        console.log(`Computer Won with a score of ${computercount}`);
    } else {
        console.log('Match Drawn!');
    }
    console.log('\n');
}






