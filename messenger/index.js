let tog = false;
let a =[];
function add(){
    let text = document.querySelector('.form-control').value;
    if (tog===false){
        let first_div = document.createElement('div');
        first_div.className ='container darker';
        first_div.innerHTML=`<img src="img/fu.jpg" alt="Avatar" class="right" style="width:100%;">\n` +
            `        <p>${text}</p>\n` +
            `        <span class="time-left"></span>`;
        let container_block_1 = document.querySelector('.my');
        let last = document.querySelector('#help');
        container_block_1.insertBefore(first_div,last);
        tog = true;
        document.querySelector('.form-control').value = "";
        a.push(first_div.outerHTML);
        localStorage.setItem('all',JSON.stringify(a));
    }
    else {
        let first_div = document.createElement('div');
        first_div.className ='container';
        first_div.innerHTML=`<img src="img/milk.jpg" alt="Avatar" style="width:100%;">\n` +
            `        <p>${text}</p>\n` +
            `        <span class="time-right"></span>`;
        let container_block_1 = document.querySelector('.my');
        let last = document.querySelector('#help');
        container_block_1.insertBefore(first_div,last);
        tog = false;
        document.querySelector('.form-control').value = "";
        a.push(first_div.outerHTML);
        localStorage.setItem('all',JSON.stringify(a));
    }
    window.scrollTo(0,document.body.scrollHeight);
}
document.querySelector('.form-control').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        add();
    }
});
window.onload = function (){
    if (localStorage.getItem('all')!=null){
        let b = localStorage.getItem('all');
        console.log(b);
        b=JSON.parse(b);
        let container_block_1 = document.querySelector('.my');
        let last = document.querySelector('#help');
        b.forEach(element => {
            let cho = document.createElement("div");
            cho.innerHTML=element;
            container_block_1.insertBefore(cho,last);
        });
    }
}