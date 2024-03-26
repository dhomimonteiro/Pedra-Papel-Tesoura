const playerCardSpace = document.getElementById("player-cards-space");
const pcCards = document.getElementsByClassName("pc-cards");
const timerText = document.getElementById('timer');
let isCardSelected = false;
let cards = ['./imgs/tesoura.png', './imgs/papel.png', './imgs/carta-costas.png'];
let countDown;
let playerCardValue;
let pcCardValue;

//randomize the cards order on hand
function randomizeHand() {
    //Array to prevent if the number generated was already used
    let haveIt = [];
    for (let i = 0; haveIt.length != 3; i++) {
        let random = Math.floor(Math.random() * 3)
        if (!haveIt.includes(random)) {
            haveIt.push(random);
            const img = document.createElement('img');
            img.src = cards[random];
            if (cards[random].includes('papel')) {
                img.setAttribute('value', 'papel');
            }else if(cards[random].includes('pedra')){
                img.setAttribute('value', 'pedra');
            }else{
                img.setAttribute('value', 'tesoura');
            }
            img.className = "player-cards hover"
            playerCardSpace.appendChild(img);
        }
    }
}

randomizeHand()

const playerCards = document.getElementsByClassName("player-cards");

// select the player-card clicked
function selectedPlayerCard() {
    if (isCardSelected == false) {
        this.style.top = "-30px"
        isCardSelected = true;
        playerCardValue = this.getAttribute('value')
        
        removeHoverEffect();
        activateTimer();
        useCard(this);
    }
}

//activates the countdown
function activateTimer() {
    let seconds = 10;
    pcPicksCard();
    countDown = setInterval(function () {
        timerText.textContent = seconds + "s";
        seconds--;
        if (seconds < 0) {
            clearInterval(countDown);
            timerText.textContent = "";
            compareCards();
        }
    }, 1000);
}

//puts the selected card on the center of the table and push all the rest lower
function useCard(card) {
    setTimeout(() => {
        card.classList += " userChoice"
    }, 1000);
}
//remove hover effect when selecting a card
function removeHoverEffect() {
    for (let i = 0; i < playerCards.length; i++) {
        playerCards[i].classList.remove('hover');
    }
}

//click event on all player's cards
for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].addEventListener("click", selectedPlayerCard)
}

function pcPicksCard() {
    cards = ['tesoura','papel','pedra'];
    let random = Math.floor(Math.random() * 3);
    pcCardValue = cards[random];
}

function compareCards() {
    console.log('pc: ', pcCardValue);
    console.log('player: ', playerCardValue);
    if (pcCardValue === playerCardValue) {
        timerText.textContent = "Empate";

    } else if (pcCardValue === 'tesoura' && playerCardValue === 'pedra'){
        console.log('Player venceu!')
        timerText.textContent = "Empate";
    }else if (pcCardValue === 'tesoura' && playerCardValue === 'papel'){
        console.log('PC venceu!')
        timerText.textContent = "Empate";
    }else if (pcCardValue === 'pedra' && playerCardValue === 'tesoura'){
        console.log('PC venceu!')
        timerText.textContent = "Empate";
    }else if (pcCardValue === 'pedra' && playerCardValue === 'papel'){
        console.log('Player venceu!')
        timerText.textContent = "Empate";
    }else if (pcCardValue === 'papel' && playerCardValue === 'tesoura'){
        console.log('Player venceu!')
        timerText.textContent = "Empate";
    }else if (pcCardValue === 'papel' && playerCardValue === 'pedra'){
        console.log('PC venceu!')
        timerText.textContent = "Empate";
    }else{
        console.log('teste pra ver se nd faltou')
        timerText.textContent = "Empate";
    }
}