const { encode, decode } = require('./encodeDecode.js');

describe('Test encode & decode are functions', () => {
    test('if typeof encode is function', () =>{
        expect(typeof encode).toBe('function');
    });

    test('if typeof decode is function', () =>{
        expect(typeof decode).toBe('function');
    });
});