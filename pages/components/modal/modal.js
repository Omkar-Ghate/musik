const modalBtn = document.getElementById("show-modal-btn");
const modal = document.getElementById("modal-open");
const closeModal = document.getElementById("close-modal-btn")

modalBtn.addEventListener("click", () => {
    console.log("open");
    modal.className = "modal-display-open";
})

closeModal.addEventListener("click", () => {
    console.log("Close");
    modal.className = "modal-display-close";
})