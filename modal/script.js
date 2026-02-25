const body = document.body;
let btnModal = document.getElementById("btn-modal");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");

function openModal() {
    btnModal.classList.add("hidden");
    modal.classList.remove("hidden");
    overlay.style.display = "block";
}

function closeModal() {
    btnModal.classList.remove("hidden");
    modal.classList.add("hidden");
    overlay.style.display = "none";
}