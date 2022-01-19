export default function entry(parent) {
    //const line = document.createElement('hr');

    const nav = document.createElement('nav');
    nav.classList.add('navMenu');

    const tags = document.createElement('a');
    tags.href = '../me/index.html';
    tags.innerText = '15 тэгов обо мне';

    const piano = document.createElement('a');
    piano.href = '../gachipiano/index.html';
    piano.innerText = 'Гачи пианино';

    const messenger = document.createElement('a');
    messenger.href = '../messenger/index.html';
    messenger.innerText = 'Мессенджер';

    const billy = document.createElement('a');
    billy.href = '../whackABilly/index.html';
    billy.innerText = 'Ударь Билли';

    const pilotsBrothers = document.createElement('a');
    pilotsBrothers.href = '../brothers/index.html';
    pilotsBrothers.innerText = 'The Pilots Brothers\' refrigerator';

    const bomb = document.createElement('a');
    bomb.href = '../bombCountdown/index.html';
    bomb.innerText = 'Bomb Countdown';

    const pics = document.createElement('a');
    pics.href = '../artStation/index.html';
    pics.innerText = 'Art Station';

    nav.appendChild(tags);
    //nav.appendChild(line);
    nav.appendChild(piano);
    //nav.appendChild(line);
    nav.appendChild(messenger);
    //nav.appendChild(line);
    nav.appendChild(billy);
    //nav.appendChild(line);
    nav.appendChild(pilotsBrothers);
    //nav.appendChild(line);
    nav.appendChild(bomb);
    //nav.appendChild(line);
    nav.appendChild(pics);
    //nav.appendChild(line);
    tags.parentNode.insertBefore(document.createElement('hr'), tags.nextSibling);
    piano.parentNode.insertBefore(document.createElement('hr'), piano.nextSibling);
    messenger.parentNode.insertBefore(document.createElement('hr'), messenger.nextSibling);
    billy.parentNode.insertBefore(document.createElement('hr'), billy.nextSibling);
    pilotsBrothers.parentNode.insertBefore(document.createElement('hr'), pilotsBrothers.nextSibling);
    bomb.parentNode.insertBefore(document.createElement('hr'), bomb.nextSibling);
    pics.parentNode.insertBefore(document.createElement('hr'), pics.nextSibling);
    parent.append(nav);
}