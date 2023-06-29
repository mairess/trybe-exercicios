const removeItem = require('./removeItem.js');

describe('Requisite 1', () => {
    test('check if the function call removeItem([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
});

describe('Requisite 2', () => {
    test('check if the function call removeItem([1, 2, 3, 4], 3) return [1, 2, 3, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });
});

describe('Requisite 3', () => {
    test('check if the function call removeItem([1, 2, 3, 4], 5), return [1, 2, 3, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});