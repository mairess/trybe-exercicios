import Swal from 'sweetalert2';
import { useState } from 'react';
import './form.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function resetForm() {
    setEmail('');
    setFirstName('');
    setLastName('');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (firstName && lastName && email) {
      Swal.fire(
        'Formulário enviado',
        JSON.stringify({
          firstName,
          lastName,
          email,
        }),
        'success',
      );
      resetForm();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você precisa preencher todos os campos.',
      });
    }
  }

  return (
    <div className="container">
      <form onSubmit={ handleSubmit }>
        <label>
          First name:
          <input value={ firstName } onChange={ handleFirstNameChange } />
        </label>
        <label>
          Last name:
          <input value={ lastName } onChange={ handleLastNameChange } />
        </label>
        <label>
          E-mail:
          <input value={ email } onChange={ handleEmailChange } />
        </label>
        <button>Submeter formulário</button>
      </form>
    </div>
  );
}

export default Form;
