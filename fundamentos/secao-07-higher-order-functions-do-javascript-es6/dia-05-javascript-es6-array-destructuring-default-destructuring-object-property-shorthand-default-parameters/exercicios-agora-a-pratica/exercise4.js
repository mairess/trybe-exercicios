// Escreva uma função getLastName que receba como parâmetro um objeto contendo informações de uma pessoa. Essa função deve retornar a propriedade lastName para o objeto passado, porém, caso o objeto não tenha essa propriedade, a função deve retornar a mensagem lastName não preenchido.
const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }
  
  const student2 = {
    name: `Vitor`,
    age: 20,
  }
  
  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  const getLastName =(personInfoObject) => {
    const { lastName = 'lastName não preenchido'} = personInfoObject;
    return lastName;
  };
  
  console.log(getLastName(student1));
  console.log(getLastName(student2));