const barBtn = document.querySelector(".bar-icon");
const phoneNavbar = document.querySelector(".phone-nav-body");
console.log(phoneNavbar);
barBtn.addEventListener("click",()=>{
    if(phoneNavbar.style.display === "none"){
        phoneNavbar.style.display = "flex"
    }else{
        phoneNavbar.style.display = "none"
    }
})