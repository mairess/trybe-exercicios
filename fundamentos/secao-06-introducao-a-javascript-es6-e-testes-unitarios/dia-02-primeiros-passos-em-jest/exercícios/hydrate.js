const hydrate = (string) => {
    const arrayStringNumbers = string.match(/\d+/g);
    let waterCups = 0;
    for (let index = 0; index < arrayStringNumbers.length; index += 1) {
         waterCups += Number(arrayStringNumbers[index]);  
    }

    if (waterCups > 1) {
        return `${waterCups} copos de água`;
    } else {
        return `${waterCups} copo de água`;
    }
};

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;