class Card{
constructor(suit, name, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
} 
}

class Deck{
    constructor() {
        this.cards = [];
        this.suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']
        this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }
}

createDeck(); {
    console.log('Create a New Deck');
    for (let i = 0; i < this.suits.length; i++) {
        for (let n=0; n < this.names.length; n++) {
            this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]))
        }
    }
};

shuffleDeck(); {
    console.log('Shuffle Deck');
    const shuffledDeck = [];
    for (let i = 0; i < 52; i++) {
        let randomPosition = Math.floor((this.cards.length - i) * Math.random());
        let randomItem = this.cards.splice(randomPosition, 1);
        shuffledDeck.push(...randomItem);
    }
    return shuffledDeck
}

dealDeck(players, shuffledCards); {
    console.log('Deal Cards');
    let dealCards1 = shuffledCards.splice(0, 26);
    players[0].hands.push(...dealCards1);
    let dealCards2 = shuffledCards.splice(0,26);
    players [1].hands.push(...dealCards2);
}

class Players {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
}

class Game{
    constructor(){
        this.players = [];
    }
}

start (); {
    this.players.push(new Players('Wrigley'));
    this.players.push(new Players('Sophia'));
    console.log('War!', this.players);

    let myDeck = new Deck();
    myDeck.createDeck();
    let shuffledDeck = myDeck.shuffleDeck();

    myDeck.dealDeck(this.players, shuffledDeck);
    this.playGame();
    this.endGame();
}

playGame(); {
    console.log('War!');
    let player1 = this.players[0];
    let player2 = this.players[1];
    let winnerScore = 0;

    if (player1.points > player2.points) {
        gameWinner = player1.name;
        winnerScore = player1.points;
        alert('Winner ' + gameWinner + "Wins\nFinal Scores:\n" + player1.name + ': ' + player1.points + "\n" + player2.name + ': ' + player2.points + "\n");
    } else if (player2.points > player1.points) {
        gameWinner = player2.name;
        winnerScore = player2.points;
        alert('Winner ' + gameWinner + "Wins\nFinal Scores:\n" + player2.name + ': ' + player2.points + "\n" + player1.name + ': ' + player1.points + "\n");
    } else {
        alert('Final \nTie\n Final Scores:\n' + player1.name + ': ' + player1.points + "\n" + player2.name + ': ' + player2.score + "\n");
    }
    }
    
    endGame() {
        
    }
    