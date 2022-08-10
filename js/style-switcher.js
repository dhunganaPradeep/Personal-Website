// Style switching and Dark mode

// Style switcher hide and show
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide sTyle switcher on scroll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) 
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// change theme colors

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

// Dark and light mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun"); 
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
       dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})