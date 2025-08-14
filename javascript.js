
// Accordion menu functionality
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

// Image Gallery
let currentIndex = 0;
let images = document.querySelectorAll('.pipboy-img, .featured-galary-img');

function openDialog(index) {
    currentIndex = index;
    document.getElementById('dialog-image').src = images[index].src;
    document.getElementById('dialog-overlay').style.display = 'block';
    document.getElementById('image-dialog').showModal();
    document.body.style.overflow = 'hidden';
}

function closeDialog() {
    document.getElementById('dialog-overlay').style.display = 'none';
    document.getElementById('image-dialog').close();
    document.body.style.overflow = '';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('dialog-image').src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('dialog-image').src = images[currentIndex].src;
}

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
