var toggle = document.querySelector(".toggle")

toggle.addEventListener("click", () => {
    var navmenu = document.querySelector(".navmenu")

    navmenu.classList.toggle("active")
    toggle.classList.toggle("active")
})