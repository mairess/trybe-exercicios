import React, { useState } from 'react';

function App() {
  function resetForm() {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      resetForm();
      setTerms(false);
      setError(false);
      alert(
        `Nome: ${formInfo.name}
        \nemail: ${formInfo.email}
        \nEscolaridade: ${formInfo.schooling}
        \nExperiências: ${formInfo.resume}`,
      );
    } else {
      setError(true);
    }
  }

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [schooling, setSchooling] = useState('Médio');
  // const [resume, setResume] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: '',
    resume: '',
  });

  function handleChange(event: React.ChangeEvent<
  HTMLInputElement |
  HTMLSelectElement |
  HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  return (
    <form onSubmit={ (event) => handleSubmit(event) }>
      <label>
        Nome
        <input name="name" value={ formInfo.name } onChange={ handleChange } />
      </label>
      <label>
        E-mail
        <input name="email" value={ formInfo.email } onChange={ handleChange } />
      </label>
      <label>
        Escolaridade
        <select
          name="schooling"
          value={ formInfo.schooling }
          onChange={ handleChange }
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências
        <textarea name="resume" value={ formInfo.resume } onChange={ handleChange } />
      </label>
      <label>
        Aceito os termos e condições
        <input
          type="checkbox"
          checked={ terms }
          onChange={ () => setTerms(!terms) }
        />
      </label>
      {error && (
        <h4>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo
        </h4>
      )}
      <button>Enviar</button>
    </form>
  );
}

export default App;
