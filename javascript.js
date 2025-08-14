document.addEventListener("DOMContentLoaded", () => {
        // Tabs
        document.querySelectorAll('.pipboy-tab').forEach(tab => {
            tab.addEventListener('click', function () {
                document.querySelector('.pipboy-tab.active').classList.remove('active');
                this.classList.add('active');
            });
        });

        // Glitch Effect 
        document.querySelectorAll(
            '.pipboy-tab, .pipboy-button, .submenu a'
        ).forEach(el => {
            el.addEventListener('mouseenter', function () {
                if (this.textContent.trim().length > 0) {
                    this.classList.add('glitch');
                    this.setAttribute('data-text', this.textContent.trim());
                }
            });
            el.addEventListener('mouseleave', function () {
                this.classList.remove('glitch');
            });
        });

        // Accordion
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

        // Cookie Bar
        const cookieBar = document.getElementById("cookie-bar");
        const acceptBtn = document.getElementById("cookie-accept");
        if (!localStorage.getItem("cookiesAccepted")) {
            cookieBar.style.display = "flex";
        }
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBar.style.display = "none"
        });

        // Image Gallery
        const galleryImages = document.querySelectorAll('.pipboy-img');
        const dialog = document.getElementById('image-dialog');
        const dialogImg = document.getElementById('dialog-image');
        const btnPrev = document.getElementById('prev-btn');
        const btnNext = document.getElementById('next-btn');
        const btnClose = document.getElementById('close-btn');
        let currentIndex = 0;

        function showImage(index) {
            if (index >= galleryImages.length) index = 0;
            if (index < 0) index = galleryImages.length - 1;
            currentIndex = index;
            dialogImg.src = galleryImages[currentIndex].src;
        }

        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                showImage(index);
                dialog.showModal();
            });
        });

        btnNext.addEventListener('click', () => showImage(currentIndex + 1));
        btnPrev.addEventListener('click', () => showImage(currentIndex - 1));
        btnClose.addEventListener('click', () => dialog.close());

        // Close dialog on outside click
        dialog.addEventListener('click', function(event) {

            if (event.target === dialog) {
                dialog.close();
            }
        });
    });


    // Update footer date and time
        (function() {
          const now = new Date();
          const pad = (n) => String(n).padStart(2, '0');
          const footer = document.getElementById('datum-uhr');
          if (footer) footer.textContent = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
          const stand = document.getElementById('stand-datum');
          if (stand) stand.textContent = `${pad(now.getDate())}.${pad(now.getMonth()+1)}.${now.getFullYear()}`;
        })();
