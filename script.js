let holes =
document.querySelectorAll(".hole");

let moles =
document.querySelectorAll(".mole");

let scoreText =
document.querySelector(".score");

let score = 0;

let currentHole = null;

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

    currentHole =
    holes[randomIndex];

    let mole =
    currentHole.querySelector(".mole");

    mole.classList.add(
        "active"
    );

}

moles.forEach(function(mole){

    mole.addEventListener(
    "click",
    function(){

        if(
            mole.classList.contains(
                "active"
            )
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

setInterval(
    randomMole,
    900
);