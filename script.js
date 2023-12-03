const playerCardSpace = document.getElementById("player-cards-space");
const pcCards = document.getElementsByClassName("pc-cards");
const timer = document.getElementById('timer');
let isCardSelected = false;
let cards = [];
cards.push('./imgs/tesoura.png');
cards.push('./imgs/papel.png');
cards.push('./imgs/carta-costas.png');

//randomize where the cards are on hand
function randomizeHand() {
    //Array to prevent if the number generated was already used
    let haveIt = [];
    for (let i = 0; haveIt.length != 3; i++) {
        let random = Math.floor(Math.random()*3)
        if (!haveIt.includes(random)) {
            haveIt.push(random);
            const img = document.createElement('img');
            img.src = cards[random];
            img.className =  "player-cards hover"
            playerCardSpace.appendChild(img);
        }
    }
}

randomizeHand()

const playerCards = document.getElementsByClassName("player-cards");

// select the player-card clicked
function selectedPlayerCard(){
    if (isCardSelected == false) {        
        console.log('cliquei')
        this.style.top = "-30px"
        isCardSelected = true;
        removeHoverEffect();
    }
}

//remove hover effect when selecting a card
function removeHoverEffect(){
    for (let i = 0; i < playerCards.length; i++) {
        playerCards[i].classList.remove('hover');
    }
}

for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].addEventListener("click", selectedPlayerCard)
}
