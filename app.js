// selecting the game
let startIngBox = document.querySelector(".starting");
let gameX = document.querySelector(".X")
let gameO = document.querySelector(".O")
let startBTN = document.querySelector(".sel_continue")
// =========== game element ====
let box = document.querySelector(".game")
let btns = document.querySelectorAll(".btn");
let win = document.querySelector(".winner");
let winner = document.querySelector("#winner");
let turn = document.querySelector(".pass")
// ========== rematch =====
let newGame = document.querySelector(".agin")
let reset = document.querySelector(".restar")
// game  =====
let game = true;

window.addEventListener( 'load' , ()=> {
    if (game == true) {
        gameX.classList.add("bg")
        gameO.classList.remove("bg")
    }else{
        gameO.classList.add("bg")
        gameX.classList.remove("bg")
    }
    if (game) {
        turn.innerText = 'X'
    }else{
        turn.innerText = 'O'
    }
})

let chooseGame = (e) => (game = e);

gameX.addEventListener('click', (e) => {
    chooseGame(true)
    gameX.classList.add("bg")
    gameO.classList.remove("bg")
    console.log(gameX);
});
gameO.addEventListener('click', (e) => {
    chooseGame(false)
    gameO.classList.add("bg")
    gameX.classList.remove("bg")
    console.log(gameO);
});

startBTN.addEventListener('click', ( ()=> {
    startIngBox.classList.add("hide");
    box.classList.remove("hide")
    if (game) {
        turn.innerText = 'X'
    }else{
        turn.innerText = 'O'
    }
    console.log(game);
}))

// ============ Game ===========


let pattens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

]

let showWinner = (e)=> {
    for (const btn of btns) {
        btn.disabled = 'true'
    }
    winner.innerText = e;
    box.classList.add("hide")
    win.classList.remove("hide")
}

let checkWinner = ()=> {
 for (const patten of pattens) {
    let pos1 = btns[patten[0]].innerText
    let pos2 =  btns[patten[1]].innerText
    let pos3 = btns[patten[2]].innerText

    if (pos1 != '' && pos2 != '' && pos3 != '') {
        if (pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
        }
    }
 }
}

btns.forEach((btn)=> {
    btn.addEventListener('click', (()=> {
        if (game) {
            btn.innerText = 'X'
            game = false;
            turn.innerText = 'O'
        } else {
            btn.innerText = 'O'
            game = true;
            turn.innerText = 'X'
        }
        btn.disabled = 'true'
        checkWinner();
    }))
})

let rematch = ()=> {
    for (const btn of btns) {
        btn.innerHTML = ''
        btn.disabled = false;
    }
    win.classList.add("hide");
    box.classList.add("hide")
    startIngBox.classList.remove("hide");
}

newGame.addEventListener("click", ()=> {
    rematch()
    console.log('New');
});
reset.addEventListener("click", ()=> {
    rematch()
    console.log('Re');
});