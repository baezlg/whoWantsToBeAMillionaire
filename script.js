// var playMusic = new Audio("audio/main theme.mp3");
// var play = document.querySelector(".play");
// window.addEventListener("load", () => {
//     playMusic.play();
// })

let life = document.querySelector(".life-line");
let cancel = document.querySelector(".closebtn");
let helpBox = document.querySelector(".question-help");

cancel.addEventListener("click", () => {
    helpBox.classList.toggle("show");
})
life.addEventListener("click", () => {
    helpBox.classList.toggle("show");
})