var root = document.querySelector(':root');
var randomhue = Math.floor(Math.random() * 360);
root.style.setProperty('--page-hue', randomhue + "deg");
var changecolorbutton = document.querySelector('#change-color-button');
changecolorbutton.addEventListener('click', () => {
    var randomhue = Math.floor(Math.random() * 360);
    root.style.setProperty('--page-hue', randomhue + "deg");
});
var placing = false;
var cameramove = false;
var mousepos = { x: 0, y: 0 };
document.addEventListener('mousemove', (event) => {
    if(placing){
        let thisitem = document.querySelector(".placing")        
        if(thisitem){
            let mousepos = { x: event.clientX, y: event.clientY };
            thisitem.style.left = mousepos.x - thisitem.offsetWidth / 2 + 'px';
            thisitem.style.top = mousepos.y - thisitem.offsetHeight / 2 + 'px';
        }
    }
    if(cameramove){
        let selecteditems = document.querySelectorAll(".node")
        let mousemoved = { x: event.clientX - mousepos.x, y: event.clientY - mousepos.y };
        for(let i = 0; i < selecteditems.length; i++){
            selecteditems[i].style.left = parseInt(selecteditems[i].style.left) + mousemoved.x + 'px';
            selecteditems[i].style.top = parseInt(selecteditems[i].style.top) + mousemoved.y + 'px';
        }
        mousepos = { x: event.clientX, y: event.clientY };
    }
})
document.addEventListener('mousedown', (event) => {
    if(event.button == 1){
        cameramove = true;
        mousepos = { x: event.clientX, y: event.clientY };
    }
})
document.addEventListener('mouseup', (event) => {
    if(event.button == 1){
        cameramove = false;
    }
})

document.body.addEventListener('click', (event) => {
    if(placing && !event.target.classList.contains("adder")){
        let thisitem = document.querySelector(".placing")
        thisitem.classList.remove("placing");
        placing = false;
    }
})