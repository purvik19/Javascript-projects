const container = document.querySelector(".container");
const resetBtn = document.getElementById("reset");

const fruitIcons = ["🍎", "🍌", "🍊", "🍇", "🍉", "🍓", "🍍", "🥭"];
let fruits = [...fruitIcons, ...fruitIcons]; // Duplicate for matching pairs
let flippedCards = [];
let matchedCards = [];

function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderGame() {
    let shuffledFruits = shuffleArray(fruits);
    container.innerHTML = ""; 
    flippedCards = [];
    matchedCards = [];

    shuffledFruits.forEach((icon) => {
        let card = document.createElement("div");
        card.classList.add("box");
        card.dataset.icon = icon;
        card.innerHTML = `<span class="hidden">${icon}</span>`;
        card.addEventListener("click", flipCard);
        container.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("matched")) {
        this.classList.add("flipped");
        this.querySelector("span").classList.remove("hidden");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 700);
        }
    }
}

function checkMatch() {
    let [card1, card2] = flippedCards;

    if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards.push(card1, card2);
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.querySelector("span").classList.add("hidden");
        card2.querySelector("span").classList.add("hidden");
    }
    
    flippedCards = [];

    if (matchedCards.length === fruits.length) {
        setTimeout(() => alert("🎉 You won! Play again?"), 500);
    }
}

resetBtn.addEventListener("click", renderGame);
renderGame();
