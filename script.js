

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(2,6,23,.95)";

        header.style.backdropFilter =
            "blur(20px)";

    } else {

        header.style.background =
            "rgba(2,6,23,.85)";

    }

});


const revealElements = document.querySelectorAll(
    ".about, .project-card, .skills, .contact, .experience-card, .education-card"
);
function revealOnScroll() {

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero-content");

    const value = window.scrollY;

    hero.style.opacity =
        1 - value / 700;

    hero.style.transform =
        `translateY(${value * 0.2}px)`;

});



const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active-link");

        }

    });

});