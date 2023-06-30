const { encode, decode } = require('./encodeDecode.js');

describe('Tests encode function', () => {
    test('if typeof encode is function', () =>{
        expect(typeof encode).toBe('function');
    });

    test(`if encode vowels 'a, e, i, o, u' are converted to '1, 2, 3, 4, 5' respectivelly`, () => {
        expect(encode('encode')).toBe('2nc4d2');
    });

    test(`if encode letters 'b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z' ARE NOT converted to numbers`, () => {
        expect(encode('bcdfghjklmnpqrstvwxz')).toBe('bcdfghjklmnpqrstvwxz');
    });

    test('Check if the function returns a string with same length passed as a parameter', () =>{
        expect(decode('Maires')).toHaveLength(6);
    });
});

describe('Tests decode function', () => {
    test('if typeof decode is function', () =>{
        expect(typeof decode).toBe('function');
    });

    test(`if decode numbers '1, 2, 3, 4, 5' are converted to 'a, e, i, o, u' respectivelly`, () => {
        expect(decode('2nc4d2')).toBe('encode');
    });

    test(`if decode numbers '0, 6, 7, 8, 9' ARE NOT converted to letters`, () => {
        expect(encode('06789')).toBe('06789');
    });

    test('Check if the function returns a string with same length passed as a parameter', () =>{
        expect(decode('Maires')).toHaveLength(6);
    });
});