const elementsArr = document.querySelectorAll('.element');
let curTime = 120;
let timerId = null;
let count = 0;
const timeLeft = document.querySelector('.time');
elementsArr.forEach(elem => {
    elem.addEventListener('mousedown', () => {
        for (let i=1; i<=4;i++){
            let name = i+elem.id.charAt(1);
            let selected = document.getElementById(name);
            if(selected.classList.contains('colored')){
                selected.classList.remove('colored');
            }
            else {
                selected.classList.add('colored');
            }
        }
        for (let j=1; j<=4;j++) {
            let name = elem.id.charAt(0)+j;
            let selected = document.getElementById(name);
            if (j!=elem.id.charAt(1)) {
                if(selected.classList.contains('colored')){
                    selected.classList.remove('colored');
                }
                else {
                    selected.classList.add('colored');
                }
            }
        }
    })
})
function countDown() {
    curTime--
    timeLeft.textContent = curTime
    elementsArr.forEach(elem=>{
        if (elem.classList.contains('colored')){
            count++;
        }
    })
    if (curTime === 0 || count===16) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Конец игры, slave!')
    }
    count=0;
}
let countDownTimerId = setInterval(countDown, 1000);