const toggleForm = () => {
  const container = document.querySelector('.cig-toggle-wrapper');
  container.classList.toggle('active--apply-modal');
};

function openModal() {
  var modal = document.getElementById('cig__apply_modal');
  modal.style.display = 'block';
  document.body.classList.add('modal--open');
}

const applyModal = document.getElementById("cig__apply_modal");
window.onclick = function (event) {
  if (event.target == applyModal) {
    applyModal.style.display = "none";
    document.body.classList.remove('modal--open');
  }
}
