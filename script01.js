const finp = document.querySelector(".finp");
const fbtn = document.getElementById("fbtn");
const fhead = document.querySelector(".fhead");
const f1head = document.querySelector(".f1head");
const shead = document.querySelector(".shead");
const thead = document.querySelector(".thead");
const fohead = document.querySelector(".fohead");
const fihead = document.querySelector(".fihead");
const con = document.querySelector(".einfo");
const apiurl = `https://emojihub.yurace.pro/api/random`


function checkweather(){
    fetch(apiurl)
    .then(fec => fec.json())
    .then(item => {
        fhead.innerHTML = `${item.htmlCode}`
        f1head.textContent = `HTML CODE - ${item.htmlCode}`
        shead.innerHTML = `Emoji name - ${item.name}`
        thead.innerHTML = `Category - ${item.category}`
        fohead.innerHTML = `Group - ${item.group}`
        fihead.innerHTML = `Unicode - ${item.unicode}`
    })
}
checkweather();

fbtn.onmousedown = function() {mouseOver()};
fbtn.onmouseup = function() {mouseOut()};

function mouseOver(){
    fbtn.style.background = "white";
    fbtn.style.color = "black";
}
function mouseOut(){
    fbtn.style.background = "black";
    fbtn.style.color = "white";
}