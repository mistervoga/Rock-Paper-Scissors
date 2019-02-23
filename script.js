let computerselection = computerPlay();
let computercount = 0;
let playercount = 0;


const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener('click', function () { playRound(button.value) });
});


function game(computercount, playercount) {
    if (computercount == 5 || playercount == 5) {
        if (playercount > computercount) {
            console.log(`You Won with a score of ${playercount}`);
        } else if (playercount < computercount) {
            console.log(`Computer Won with a score of ${computercount}`);
        } else {
            console.log("You won!")
        }

    }
}


function computerPlay() {

    let array = ["rock", "paper", "scissors"];

    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function rock() {
    if (computerselection == "rock") {
        console.log("Game Tied!")

    } else if (computerselection == "scissor") {
        console.log("You Lose")
        playercount++;
        document.querySelector("#playercount span").innerHTML = playercount;
    } else {
        console.log("You won!")
        computercount++;
        document.querySelector("#computercount span").innerHTML = computercount;
    }

}

function paper() {
    if (computerselection == "rock") {
        console.log("You Lose!")
        computercount++;
        document.querySelector("#computercount span").innerHTML = computercount;
    } else if (computerselection == "scissor") {
        console.log("You Won!")
        playercount++;
        document.querySelector("#playercount span").innerHTML = playercount;
    } else {
        console.log("Game Tied!")
        
        
    }

}

function scissors() {
    if (computerselection == "rock") {
        console.log("You won!")
        playercount++;
        document.querySelector("#playercount span").innerHTML = playercount;
    } else if (computerselection == "scissors") {
        console.log("Game Tied!")
    } else {
        console.log("You Lose!")
        computercount++;
        document.querySelector("#computercount span").innerHTML = computercount;
    }

}

function playRound(playerselection) {
    if (playerselection == "rock") {
        rock();
    } else if (playerselection == "scissors") {
        scissors();
    } else {
        paper();
    }

}








