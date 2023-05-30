const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let sum = 0;
let = avarage = 0;
let higherNumber = numbers[0];

for (var index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
};

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
  };

console.log(`A soma total dos números do arrya é ${result}`);

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    avarage = sum / numbers.length;
  };

  if (avarage > 20) {
    console.log('O valor da média aritmética é maior que 20')
  } else if (avarage < 20){
    console.log('O valor da média aritmética é menor ou igual a 20');
  }

  for (var index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index]
    }
  };
  console.log(`O maior número do arrau é ${higherNumber}`)

  let oddNumbers = 0;
  let evenNumber =0;

  for (var index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        oddNumbers += 1;
    }
} if (oddNumbers > 0) {
    console.log(`Esse array possui ${oddNumbers} números ímpares`);
} else {
    console.log('Nenhum valor ímpar encontrado');
}
  