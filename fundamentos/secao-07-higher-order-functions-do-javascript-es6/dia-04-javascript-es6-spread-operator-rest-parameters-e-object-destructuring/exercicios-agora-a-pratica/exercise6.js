// O objeto yearSeasons representa as estações do ano. Cada chave do objeto é uma estação, e o valor de cada chave é um array de strings que representa os meses daquela estação. A partir desse objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.

// Obs. 💬: As estações do ano aqui descritas têm base nas estações do hemisfério norte.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const { spring, summer, autumn, winter } = yearSeasons;
const monthsOfTheYear = [...spring, ...summer, ...autumn, ...winter];

console.log(monthsOfTheYear);

