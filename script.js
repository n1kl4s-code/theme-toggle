const lightmodeSVG = document.getElementById("lightmode-svg");
const darkmodeSVG = document.getElementById("darkmode-svg");
const toggle = document.querySelector(".toggle");
const toggleBall = document.querySelector(".toggle-ball");
const html = document.querySelector("html");
const translateToggleBallValue = toggleBall.computedStyleMap().get("transform").toString().split("(")[1].split(",")[0].split("%")[0];
const modeHint = document.getElementById("mode-hint");
console.log(translateToggleBallValue)

function adaptWebsite(mode) {
    modeHint.textContent = `${mode.toUpperCase()}MODE`;
    html.style.colorScheme = mode;
    if (mode === "light") {
        lightmodeSVG.querySelectorAll("path").forEach(p => {
            p.setAttribute("fill", document.querySelector("html").computedStyleMap().get("color").toString());
        });
        darkmodeSVG.querySelectorAll("path").forEach(p => {
            p.setAttribute("fill", document.querySelector("html").computedStyleMap().get("color").toString());
        });
        toggle.style.borderColor = document.querySelector("html").computedStyleMap().get("color").toString();
        toggleBall.style.backgroundColor = document.querySelector("html").computedStyleMap().get("color").toString();
    } else if (mode === "dark") {
        lightmodeSVG.querySelectorAll("path").forEach(p => {
            p.setAttribute("fill", document.querySelector("html").computedStyleMap().get("color").toString());
        });
        darkmodeSVG.querySelectorAll("path").forEach(p => {
            p.setAttribute("fill", document.querySelector("html").computedStyleMap().get("color").toString());
        });
        toggle.style.borderColor = document.querySelector("html").computedStyleMap().get("color").toString();
        toggleBall.style.backgroundColor = document.querySelector("html").computedStyleMap().get("color").toString();
    };
};

if (window.navigator.userAgentData.mobile) {
    toggle.addEventListener("touchstart", () => {
        toggleBall.classList.toggle("slide-right-and-activate-darkmode");
        if (toggleBall.classList.contains("slide-right-and-activate-darkmode")) {
            toggleBall.style.transform = `translateX(${translateToggleBallValue*-1}%)`;
            adaptWebsite("dark");
        } else {
            toggleBall.style.transform = `translateX(${translateToggleBallValue}%)`;
            adaptWebsite("light");
        };
    });
} else {
    toggle.addEventListener("click", () => {
        toggleBall.classList.toggle("slide-right-and-activate-darkmode");
        if (toggleBall.classList.contains("slide-right-and-activate-darkmode")) {
            toggleBall.style.transform = `translateX(${translateToggleBallValue*-1}%)`;
            adaptWebsite("dark");
        } else {
            toggleBall.style.transform = `translateX(${translateToggleBallValue}%)`;
            adaptWebsite("light");
        };
    }); 
};

window.addEventListener("load", () => {
    console.log(window.innerHeight, window.innerWidth)
    modeHint.textContent = `${document.querySelector("html").computedStyleMap().get("color-scheme").toString().toUpperCase()}MODE`;
});
