const techList = (array, string) => {
    if (array.length === 0) {
        return 'Vazio!';
    };
    
    const arrayTech = [];
    array.sort();
    for (let index = 0; index < array.length; index += 1) {
        const techObject = {
            tech: `${array[index]}`,
            name: `${string}`,
        };
        arrayTech.push(techObject);
    };
    return arrayTech;
};

module.exports = techList;