import validator from 'validator';
import './style.css';

const button = document.querySelector('button');
const paragraph = document.querySelector('div');
const select = document.querySelector('select');

button.addEventListener('click', () => {
  const versionIpv6 = 6;
  const versionIpv4 = 4;
  const hash = 'sha1';
  const input = document.querySelector('input');
  const campos = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
    cep: validator.isPostalCode(input.value, 'BR'),
    Ascii: validator.isAscii(input.value),
    IPv6: validator.isIP(input.value, versionIpv6),
    IPv4: validator.isIP(input.value, versionIpv4),
    sha1: validator.isHash(input.value, hash),
    mobilePhone: validator.isMobilePhone(input.value, 'pt-BR'),
  };
  paragraph.innerHTML = `A validação retornou ${campos[select.value]}`;
});
