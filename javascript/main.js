const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".leftContainer");
toggler.addEventListener("click" , (e) => {
    navbar.classList.toggle("expanded");
});
