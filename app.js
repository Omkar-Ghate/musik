const barBtn = document.querySelector(".bar-icon");
const phoneNavbar = document.querySelector(".phone-nav-body");
const moonIcon = document.querySelector("#moon-icon");
let mode = "light";
console.log(phoneNavbar);
barBtn.addEventListener("click",()=>{
    if(phoneNavbar.style.display === "none"){
        phoneNavbar.style.display = "flex"
    }else{
        phoneNavbar.style.display = "none"
    }
})

moonIcon.addEventListener("click",()=>{
    if(mode === "light") {
        document.getElementById("theme-style").href = "../../../dark.css";
        mode = "dark";
    }
    else {
        document.getElementById("theme-style").href = "";
        mode = "light";
    }
})
