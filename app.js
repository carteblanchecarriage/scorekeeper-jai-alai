const playerOne = document.getElementById('player-one')
const playerTwo = document.getElementById('player-two')
const reset = document.getElementById('reset')
const winner = document.getElementById('winner')

const gameSelector = document.querySelector('select')

const p1Pts = document.getElementById('p1-pts')
const p2Pts = document.getElementById('p2-pts')

let scoreP1 = 0;
let scoreP2 = 0;

gameSelector.addEventListener('change', function () {
    p1Pts.innerHTML = 0;
    p2Pts.innerHTML = 0;
    score = 0;
})

reset.addEventListener('click', function () {
    p1Pts.innerHTML = 0;
    p2Pts.innerHTML = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    winner.innerHTML = '';
})

playerOne.addEventListener('click', function () {
    scoreP1 += 1;
    p1Pts.innerHTML = scoreP1;
    if (scoreP1 > gameSelector.value) {
        scoreP1 = 0;
        scoreP2 = 0;
        p1Pts.innerHTML = 0;
        p2Pts.innerHTML = 0;
        winner.innerHTML = '';
    } else if (scoreP1 == gameSelector.value) {
        winner.classList.add('text-green-500')
        winner.innerHTML = 'Player One WINS!';
        setTimeout(function () {
            scoreP1 = 0;
            scoreP2 = 0;
            p1Pts.innerHTML = 0;
            p2Pts.innerHTML = 0;
            winner.innerHTML = '';
            winner.classList.remove('text-green-500')
        }, "5000")
    }
})

playerTwo.addEventListener('click', function () {
    scoreP2 += 1;
    p2Pts.innerHTML = scoreP2;
    if (scoreP2 > gameSelector.value) {
        scoreP1 = 0;
        scoreP2 = 0;
        p1Pts.innerHTML = 0;
        p2Pts.innerHTML = 0;
        winner.innerHTML = '';
    } else if (scoreP2 == gameSelector.value) {
        winner.classList.add('text-blue-500')
        winner.innerHTML = 'Player Two WINS!';
        setTimeout(function () {
            scoreP1 = 0;
            scoreP2 = 0;
            p1Pts.innerHTML = 0
            p2Pts.innerHTML = 0
            winner.innerHTML = '';
            winner.classList.remove('text-blue-500')
        }, "5000")
    }
})