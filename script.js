const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");
const prevBtn = document.querySelector(".modal-prev");
const nextBtn = document.querySelector(".modal-next");
const imageCounter = document.getElementById("imageCounter");

let currentImages = [];
let currentIndex = 0;


/* ==========================
   OPEN IMAGE MODAL
========================== */

function openModal(images, index) {

    currentImages = images;
    currentIndex = index;

    modal.style.display = "flex";

    updateModalImage();
}



function updateGreeting(){
const hour = new Date().getHours();
const greeting = document.getElementById("timeGreeting");

     if (hour >= 5 && hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
        greeting.textContent = "Good Afternoon!";
    } else if (hour >= 17 && hour < 21) {
        greeting.textContent = "Good Evening!";
    } else {
        greeting.textContent = "Good Night!";
    }

    
}

updateGreeting();


/* ==========================
   UPDATE MODAL IMAGE
========================== */

function updateModalImage() {

    if (currentImages.length === 0) {
        return;
    }

    modalImg.src = currentImages[currentIndex].src;
    modalImg.alt = currentImages[currentIndex].alt;

    imageCounter.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;

    if (currentImages.length <= 1) {

        prevBtn.style.display = "none";
        nextBtn.style.display = "none";

    } else {

        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
}


/* ==========================
   PROJECT IMAGES
========================== */

const projectGroups =
    document.querySelectorAll(".project-images");

projectGroups.forEach(group => {

    const groupImages =
        Array.from(group.querySelectorAll("img"));

    groupImages.forEach((image, index) => {

        image.addEventListener("click", () => {

            openModal(groupImages, index);

        });

    });

});


/* ==========================
   CERTIFICATION CARDS
========================== */

const certificateCards =
    document.querySelectorAll(".certificate-card");

const certificateImages =
    Array.from(
        document.querySelectorAll(".certificate-card img")
    );

certificateCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        openModal(certificateImages, index);

    });

});


/* ==========================
   NEXT IMAGE
========================== */

nextBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    if (currentImages.length <= 1) {
        return;
    }

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    updateModalImage();

});


/* ==========================
   PREVIOUS IMAGE
========================== */

prevBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    if (currentImages.length <= 1) {
        return;
    }

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    updateModalImage();

});


/* ==========================
   CLOSE MODAL
========================== */

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});


/* ==========================
   CLICK OUTSIDE IMAGE
========================== */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});


/* ==========================
   KEYBOARD CONTROLS
========================== */

document.addEventListener("keydown", (event) => {

    if (modal.style.display !== "flex") {
        return;
    }

    if (event.key === "Escape") {

        modal.style.display = "none";

    }

    if (event.key === "ArrowRight") {

        nextBtn.click();

    }

    if (event.key === "ArrowLeft") {

        prevBtn.click();

    }

});