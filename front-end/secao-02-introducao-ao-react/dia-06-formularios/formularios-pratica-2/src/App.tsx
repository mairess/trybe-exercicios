import { useState } from 'react';

function App() {
  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      alert(
        `Nome: ${name}
        \nemail: ${email}
        \nEscolaridade: ${schooling}
        \nExperiências: ${resume}`,
      );
      resetForm();
    } else {
      setError(true);
    }
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [resume, setResume] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label>
          Nome
          <input value={ name } onChange={ ({ target }) => setName(target.value) } />
        </label>
        <label>
          E-mail
          <input value={ email } onChange={ ({ target }) => setEmail(target.value) } />
        </label>
        <label>
          Escolaridade
          <select
            value={ schooling }
            onChange={ ({ target }) => setSchooling(target.value) }
          >
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea value={ resume } onChange={ ({ target }) => setResume(target.value) } />
        </label>
        <label>
          Aceito os termos e condições
          <input
            type="checkbox"
            checked={ terms }
            onChange={ () => setTerms((prevTerms) => !prevTerms) }
          />
        </label>
        <button>Enviar</button>
      </form>
      {error && (
        <h4>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo
        </h4>
      )}
    </>
  );
}

export default App;
