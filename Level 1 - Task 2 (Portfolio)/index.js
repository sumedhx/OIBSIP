const toggle_icon = document.querySelector(".toggle");
const header = document.querySelector(".header");

const toggleNavber = () =>{
    header.classList.toggle("active")
}

toggle_icon.addEventListener("click", () => toggleNavber());