document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });

        header.classList.toggle("sticky", top > 100);
        
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    });
});

function sendMail(event) {
    event.preventDefault();
    
    const form = document.getElementById("contact-form");
    const parms = {
        name: form["name"].value,
        email: form["email"].value,
        subject: form["subject"].value,
        message: form["message"].value
    };
    
    
    emailjs.send("service_tsut9y1","template_9bniymh", parms)
        .then(() => {
            alert("Il tuo messaggio è stato inviato con successo!");
            form.reset();
        })
        .catch(() => {
            alert("Si è verificato un errore nell'invio del messaggio. Riprova.");
        });
}
