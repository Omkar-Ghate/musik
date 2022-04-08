const modalBtn = document.getElementById("show-modal-btn");
const modal = document.getElementById("modal-open");
const closeModal = document.getElementById("close-modal-btn")

modalBtn.addEventListener("click", () => {
    modal.className = "modal-display-open";
    body.style.overflow = "hidden";
})

closeModal.addEventListener("click", () => {
    modal.className = "modal-display-close";
})