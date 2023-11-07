// Get the button and modal elements
const questionButton = document.getElementById("question-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listeners
questionButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});