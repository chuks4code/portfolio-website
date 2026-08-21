const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImage");

const images = document.querySelectorAll( ".project-images img, .certificate-card img");

const closeBtn = document.querySelector(".close-modal");

images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});
const certificateCards = document.querySelectorAll(".certificate-card");

certificateCards.forEach(card => {

    card.addEventListener("click", () => {

        const img = card.querySelector("img");

        modal.style.display = "flex";

        modalImg.src = img.src;

    });

});