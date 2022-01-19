/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

const delay = 1000;
function ddd(){
    if (!(document.getElementById('hours').innerText==='Часы' || document.getElementById('minutes').innerText==='Минуты'
    || document.getElementById('seconds').innerText==='Секунды')) {
        document.body.style.background = "black";
        let hoursM = parseInt(document.getElementById('hours').innerText);
        let minutesM = parseInt(document.getElementById('minutes').innerText);
        let secondsM = parseInt(document.getElementById('seconds').innerText);
        let timeMinut = hoursM * 3600 + minutesM * 60 + secondsM;
        const promise = new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                document.body.style.background = "black";
                seconds = timeMinut % 60;
                minutes = timeMinut / 60 % 60;
                hour = timeMinut / 60 / 60 % 60;
                if (timeMinut <= 0) {
                    clearInterval(interval);
                    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${0}`;
                    document.getElementById('time').innerHTML = strTimer;
                    document.body.style.background = "red";
                } else {
                    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                    document.getElementById('time').innerHTML = strTimer;
                }
                --timeMinut;
            }, delay);
        });

        promise.then(function () {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${0}`;
            document.getElementById('time').innerHTML = strTimer;
            document.body.style.background = "red";
        });
    } else {
        alert('Выбери время');
    }
}

