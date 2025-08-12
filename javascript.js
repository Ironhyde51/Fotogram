
    // Simple tab functionality
    document.querySelectorAll('.pipboy-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelector('.pipboy-tab.active').classList.remove('active');
            this.classList.add('active');
            // Here you would add code to switch content panels
        });
    });

    // Glitch effect für ALLE hoverbaren Pipboy-Elemente
document.querySelectorAll(
    '.pipboy-button, .pipboy-tab, .submenu a, .game-item, .settings-item'
).forEach(el => {
    el.addEventListener('mouseenter', function () {
        this.classList.add('glitch');
        this.setAttribute('data-text', this.textContent.trim());
    });

    el.addEventListener('mouseleave', function () {
        this.classList.remove('glitch');
    });
});


    // Accordion functionality for nav
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', function () {
            const parent = this.parentElement;
            parent.classList.toggle('open');

            const submenu = parent.querySelector('.submenu');
            if (submenu) {
                submenu.style.maxHeight = submenu.style.maxHeight ? null : submenu.scrollHeight + 'px';
            }
        });
    });

    // Simulate radio static
    const radio = document.querySelector('.radio-active');
    setInterval(() => {
        if (Math.random() > 0.7) {
            radio.style.animation = 'none';
            setTimeout(() => {
                radio.style.animation = 'radio-active 0.5s infinite alternate';
            }, 100);
        }
    }, 3000);

    // Cookie Bar Func

    document.addEventListener("DOMContentLoaded", () => {
        const cookieBar = document.getElementById("cookie-bar");
        const acceptBtn = document.getElementById("cookie-accept");


        if (!localStorage.getItem("cookiesAccepted")) {
            cookieBar.style.display = "flex";
        }


        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBar.style.display = "none"
        });
    });
