let holes =
document.querySelectorAll(".hole");

let moles =
document.querySelectorAll(".mole");

let scoreText =
document.querySelector(".score");

let timerText =
document.querySelector(".timer");

let startBtn =
document.querySelector(".start-btn");

let gameOver =
document.querySelector(".game-over");

let finalScore =
document.querySelector(".final-score");

let restartBtn =
document.querySelector(".restart-btn");

let score = 0;

let time = 30;

let gameRunning = false;

let moleInterval;

let timerInterval;

function randomMole(){

    moles.forEach(function(mole){

        mole.classList.remove(
            "active"
        );

    });

    let randomIndex =
    Math.floor(
        Math.random() * holes.length
    );

    let mole =
    holes[randomIndex]
    .querySelector(".mole");

    mole.classList.add(
        "active"
    );

}

function startGame(){

    score = 0;

    time = 30;

    gameRunning = true;

    scoreText.innerText = score;

    timerText.innerText = time;

    gameOver.classList.add(
        "hidden"
    );

    moleInterval =
    setInterval(
        randomMole,
        900
    );

    timerInterval =
    setInterval(function(){

        time--;

        timerText.innerText =
        time;

        if(time <= 0){

            endGame();

        }

    },1000);

}

function endGame(){

    clearInterval(
        moleInterval
    );

    clearInterval(
        timerInterval
    );

    gameRunning = false;

    moles.forEach(function(mole){

        mole.classList.remove(
            "active"
        );

    });

    finalScore.innerText =
    "Final Score: " + score;

    gameOver.classList.remove(
        "hidden"
    );

}

moles.forEach(function(mole){

    mole.addEventListener(
    "click",
    function(){

        if(
            mole.classList.contains(
                "active"
            ) &&
            gameRunning
        ){

            score++;

            scoreText.innerText =
            score;

            mole.classList.remove(
                "active"
            );

        }

    });

});

startBtn.onclick =
startGame;

restartBtn.onclick =
startGame;