
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

// Create an array (list) with all Images and their information
const games = [
    { title: "VAULT ESCAPE", category: "ACTION", img: "./img/Vault_Escape.png", index: 0, green: true },
    { title: "ROBCO WARS", category: "STRATEGY", img: "./img/Rob_COP.png", index: 1, green: true },
    { title: "ROAD WARRIOR", category: "RACING", img: "./img/Road_Warrior.png", index: 2, green: true },
    { title: "F.E.V. LABS", category: "SIMULATION", img: "./img/FEV_Labs.png", index: 3, green: false },
    { title: "DEATHCLAW HUNT", category: "HORROR", img: "./img/Deathclaw_Hunt.png", index: 4, green: true },
    { title: "GHOUL JUMP", category: "PLATFORMING", img: "./img/Gouhl_Jump.png", index: 5, green: true },
    { title: "STELTH SPEC OPS", category: "WASTELAND SPY", img: "./img/Shalter_spec.png", index: 6, green: true },
    { title: "SURVIAL SHELTER", category: "DA CITY", img: "./img/Survival_Shalter.png", index: 7, green: true },
    { title: "WASTELAND LEGENDS", category: "VAULT CHRONICLE", img: "./img/Wastland_Legend.png", index: 8, green: true },
    { title: "ATOMBORN QUEST", category: "RPG", img: "./img/Atom_Born.png", index: 9, green: false },
    { title: "VAULT BUILDER", category: "SANDBOX", img: "./img/Vault_Builder.png", index: 10, green: true },
    { title: "ATOMIC SCI-FI", category: "FUTURISTIC", img: "./img/Atomic_sifi.png", index: 11, green: true }
];

// Find the HTML element where the games will be placed
const libraryContainer = document.getElementById("library-container");

// Loop through all Images one by one
for (let i = 0; i < games.length; i++) {
    const game = games[i];
    let categoryClass = "text-xs";
    if (game.green) {
        categoryClass += " text-green-light";
    }
    
 // Add the Images HTML to the library container
    libraryContainer.innerHTML +=
        '<div class="game-item border border-green p-2 pipboy-button" data-text="' + game.category + '">' +
            '<div class="game-icon bg-green-dark h-24 mb-2 flex-center">' +
                '<img src="' + game.img + '" alt="' + game.category + '" class="featured-galary-game-img pipboy-img" onclick="openDialog(' + game.index + ')">' +
            '</div>' +
            '<div class="text-sm">' + game.title + '</div>' +
            '<div class="' + categoryClass + '">' + game.category + '</div>' +
        '</div>';
}

// Image Gallery
let currentIndex = 0;
let images = document.querySelectorAll('.pipboy-img, .featured-galary-img');

function openDialog(index) {
    currentIndex = index;
    document.getElementById('dialog-image').src = images[index].src;
    document.getElementById('image-dialog').showModal();
    document.body.style.overflow = 'hidden'; 
}

function closeDialog() {
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
