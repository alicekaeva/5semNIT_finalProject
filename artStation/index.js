fetch('/artStation/images.json').then(response => {
    response.json().then(result => {
        result.path.forEach(el=>addImage(el.p));
        result.url.forEach(el=>addImage(el.u));
        result.base64.forEach(el=>addImage(el.b));
    })
})

function addImage(what) {
    const image = new Image();
    image.src = what;
    document.querySelector('.main').append(image);
}