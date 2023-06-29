const { encode, decode } = require('./encodeDecode.js');

describe('Test encode', () => {
    test('if encode is a function', () =>{
        expect(encode('encode')).toBe('2nc4d2');
    });
});

describe('Test decode', () => {
    test('if decode is a function', () =>{
        expect(decode('decode')).toBe('decode');
    });
});