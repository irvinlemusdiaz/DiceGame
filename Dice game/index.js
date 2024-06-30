//the big block of code is the code that gives you teh dice roll
var imageElement1 = document.getElementById('img1');
var imageElement2 = document.getElementById('img2');
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1, randomNumber2);

function checkDiceFace(randomNumber, imageElement) {
    if (randomNumber === 1) {
        imageElement.setAttribute('src', 'images/dice1.png');
    } else if (randomNumber === 2) {
        imageElement.setAttribute('src', 'images/dice2.png');
    } else if (randomNumber === 3) {
        imageElement.setAttribute('src', 'images/dice3.png');
    } else if (randomNumber === 4) {
        imageElement.setAttribute('src', 'images/dice4.png');
    } else if (randomNumber === 5) {
        imageElement.setAttribute('src', 'images/dice5.png');
    } else if (randomNumber === 6) {
        imageElement.setAttribute('src', 'images/dice6.png');
    }
}

//Now this changes the title of the outcome

checkDiceFace(randomNumber1, imageElement1);
checkDiceFace(randomNumber2, imageElement2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681"
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "&#128681 TIE!! &#128681"
    };