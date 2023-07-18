import validator from 'validator';

const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
  const select = document.querySelector('select');
  const input = document.querySelector('input');
  if (select.value === 'email') {
    const validationResult = validator.isEmail(input.value);
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
  if (select.value === 'cpf') {
    const validationResult = validator.isNumeric(input.value);
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
  if (select.value === 'cep') {
    const validationResult = validator.isPostalCode(input.value, 'BR');
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
  if (select.value === 'Ascii') {
    const validationResult = validator.isAscii(input.value);
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
  if (select.value === 'IPv6') {
    const version = 6;
    const validationResult = validator.isIP(input.value, version);
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
  if (select.value === 'IPv4') {
    const version = 4;
    const validationResult = validator.isIP(input.value, version);
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
  if (select.value === 'sha1') {
    const hash = 'sha1';
    const validationResult = validator.isHash(input.value, hash);
    paragraph.innerHTML = `A validação retornou ${validationResult}`;
  }
});
