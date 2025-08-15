
// Accordion menu functionality
function toggleAccordion(element) {
    let parent = element.parentElement;
    parent.classList.toggle('open');

    let submenu = parent.querySelector('.submenu');
    if (submenu) {
        if (submenu.style.maxHeight) {
            submenu.style.maxHeight = null;
        } else {
            submenu.style.maxHeight = submenu.scrollHeight + "px";
        }
    }
}

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

// Cookie-Bar
if (!localStorage.cookiesAccepted) {
  document.getElementById("cookie-bar").style.display = "flex";
}
document.getElementById("cookie-accept").onclick = function () {
  localStorage.cookiesAccepted = "true";
  document.getElementById("cookie-bar").style.display = "none";
};
