// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItems = ['kiwi', 'morango', 'granola'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItems];

console.log(fruitSalad(specialFruit, additionalItems));