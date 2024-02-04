let navbar = document.getElementById("nav");
let searchForm = document.getElementById("searchForm");
let loginForm = document.getElementById("loginForm");
let contactInfo = document.getElementById("contactInfo");
let closeContactBtn = document.getElementById("close-contact-info");

closeContactBtn.onclick = () =>{
    contactInfo.classList.remove("active");
}

document.getElementById("info-btn").onclick = () =>{
    contactInfo.classList.toggle("active")
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    
}


document.getElementById("menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active"); 
};
document.getElementById("search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    contactInfo.classList.remove("active");

}

document.getElementById("login-btn").onclick = () =>{
    loginForm.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    contactInfo.classList.remove("active");
}


window.onscroll = () =>{
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    contactInfo.classList.remove("active");
}



    var swiper = new Swiper(".home-slider", {
        loop:true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
;
