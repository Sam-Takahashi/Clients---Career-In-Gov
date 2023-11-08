const toggleForm = () => {
  const container = document.querySelector('.cig-toggle-wrapper');
  container.classList.toggle('active--apply-modal');
};

const applyModal = document.getElementById("cig__apply_modal");
window.onclick = function (event) {
  if (event.target == applyModal) {
    applyModal.style.display = "none";
  }
}