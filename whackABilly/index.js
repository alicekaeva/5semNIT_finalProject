let res = 0;
let pos;
let curTime = 60;
let timerId = null;
const elems = document.querySelectorAll('.element');
const billy = document.querySelector('.billy');
const timeLeft = document.querySelector('.time');
const count = document.querySelector('.count');
function billyState() {
    elems.forEach(elem => {
        elem.classList.remove('billy');
    })
    let elem = elems[Math.floor(Math.random() * 16)];
    elem.classList.add('billy');
    pos = elem.id;
}

elems.forEach(elem => {
    elem.addEventListener('mousedown', () => {
        if (elem.id === pos) {
            res++;
            let audio = new Audio('music/aahh.mp3');
            audio.play();
            count.textContent = `Твой счет: ${res}`;
            pos = null;
        }
    })
})

function changeBilly() {
    timerId = setInterval(billyState, 500);
}

changeBilly();

function countDown() {
    curTime--;
    timeLeft.textContent = curTime;
    if (curTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Конец игры, slave! Твой счет: ' + res);
    }
}
let countDownTimerId = setInterval(countDown, 1000);