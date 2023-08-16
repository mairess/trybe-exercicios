import React, { useState } from 'react';
import Button from '../botao/Botao';

type FormProps = {
  submitFunction: (title: string, author: string, pages: number) => void
};

function Form({ submitFunction }: FormProps) {
  const [formData, setFormData] = useState({ title: '', author: '', pages: 0 });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    ));
  }

  function resetForm() {
    setFormData({ title: '', author: '', pages: 0 });
    // setBookTitle('');
    // setBookAuthor('');
    // setBookPages(0);
  }

  function isFormValid() {
    const erros = [];

    if (formData.title === '') {
      erros.push('O campo Título é orbigatório');
    }

    if (formData.author === '') {
      erros.push('O campo Autor não pode ser vazio');
    }

    if (formData.pages <= 0) {
      erros.push('O campo Páginas precisa ser mairo que zero');
    }

    setErrorMessages(erros);

    return erros.length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid()) {
      submitFunction(formData.title, formData.author, formData.pages);
      resetForm();
      setErrorMessages([]);
    }
  }

  return (
    <form
      action=""
      className="books-form"
      onSubmit={ handleSubmit }
    >

      <input
        onChange={ handleChange }
        id="title"
        name="title"
        type="text"
        value={ formData.title }
        placeholder="Título"
      />
      <input
        onChange={ handleChange }
        id="author"
        name="author"
        type="text"
        value={ formData.author }
        placeholder="Autor"
      />
      <input
        onChange={ handleChange }
        id="paginas"
        name="pages"
        type="number"
        value={ formData.pages }
        placeholder="Quantidade de páginas"
      />
      {errorMessages.length > 0 && (
        <div className="alert">
          {errorMessages.map((message, index) => (
            <p key={ index }>{ message }</p>
          ))}
        </div>
      )}
      <Button>
        Adicionar
      </Button>
    </form>
  );
}

export default Form;
