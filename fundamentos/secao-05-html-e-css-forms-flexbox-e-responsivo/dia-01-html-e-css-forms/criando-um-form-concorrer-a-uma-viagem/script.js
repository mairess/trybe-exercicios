const submitBtn = document.getElementById('submit-btn'); // captura botão submit
const agreement = document.getElementById('agreement'); // captura checkbox submit
submitBtn.disabled = true; // inicia página com botão submit desabilitado
// adiciona preventDefault ao botão submit
function stopRefrech(event) {
  event.preventDefault();
}
// verifica se checkbox está selecionado
function verifyCheckbox() {
  submitBtn.disabled = !agreement.checked;
}
window.onload = () => {
  agreement.addEventListener('change', verifyCheckbox); // verifica se o checkbox está selecionado
  submitBtn.addEventListener('click', stopRefrech); // adiciona preventDefault ao botão submit
};
