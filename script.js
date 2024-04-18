//Crie uma validação no JavaScript, na qual o formulário será válido caso o número B seja maior que o número A.
  
//Exiba uma mensagem positiva para o usuário quando o formulário for válido e uma mensagem negativa quando for inválido.
const formInputA = document.querySelector('#form__input-a');
const formInputB = document.querySelector('#form__input-b');
const button = document.querySelector('.form__button-submit');
const form = document.querySelector('.form');
const formSpan = document.querySelector('.form__span-message')


function compareNumbers() {
  const numberA = parseFloat(formInputA.value); // Convertendo o valor para número
  const numberB = parseFloat(formInputB.value); // Convertendo o valor para número
  
  return numberB > numberA;
}


button.addEventListener('click', (evt) => {
  const isFormValid = compareNumbers();
  const successMessage = `O número no campo B é maior que o contido no campo A`;
  const errorMessage = 'O número no campo B não é maior que o contido no campo A';
  evt.preventDefault();

  
  if(isFormValid) {
    
    formSpan.textContent = successMessage
    formSpan.classList.add('form__span-success')
    formSpan.classList.remove('form__span-error')

  } else {
    formSpan.textContent = errorMessage;
    formSpan.classList.add('form__span-error');
    formSpan.classList.remove('form__span-success')
  }
  form.reset();
})
