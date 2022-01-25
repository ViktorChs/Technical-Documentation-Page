const mobileMenuToggle = document.querySelector(".menu-bar")
const mobileDropDown = document.querySelector(".bar-menu")

mobileMenuToggle.addEventListener("click", () => {
    mobileDropDown.classList.toggle("hidden")
})

