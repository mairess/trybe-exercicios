const myFizzBuzz = require('./myFizzBuzz.js');

describe('Test 1', () => {
    test(`if num is divided by 3 & 5 then myFizzBuzz(num) returns 'fizzbuzz'`, () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    
    test(`if num is divided only by 3 then myFizzBuzz(num) returns 'fizz'`, () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    test(`if num is divided only by 5 then myFizzBuzz(num) returns 'buzz'`, () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    test(`if num IS NOT divided by 3 & 5 then myFizzBuzz(num) returns $(num)`, () => {
        expect(myFizzBuzz(52)).toBe(52);
    });

    test('if num is NAN then myFizzBuzz(num) returns false', () => {
        expect(myFizzBuzz('teste')).toBe(false);
    });
});