const modal = document.getElementById("modal");
const fade =  document.getElementById("fade");
const open = document.getElementById("open-modal");
const close = document.getElementById("close-modal");

function toggleModal(){
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[open, close].forEach((elemento)=>{
    elemento.addEventListener("click", () => toggleModal());
});