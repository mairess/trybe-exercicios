# <p align="center">Array e estrutura de repetição</p>

## Vamos praticar!

Ao longo desse dia, você teve descobriu que a estrutura de dados `array` é muito poderosa e nos permite representar um conjunto de informações. Além disso, descobriu que o loop `for` é muito útil pra fazer ações repetitivas, como percorrer itens de um `array`. Agora você vai colocar a mão na massa e resolver problemas onde a utilização de `array` e `for` são necessárias.

## 🚀 Array e loop for

Considere esse _array_ para realizar os próximos exercícios.

```const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];```

1. Percorra o _array_ imprimindo todos os valores contidos nele com a função `console.log()`.

2. Some todos os valores contidos no _array_ e imprima o resultado.

3. Calcule e imprima a média aritmética dos valores contidos no _array_. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

5. Utilizando `for`, descubra o maior valor contido no _array_ e imprima-o.

6. Descubra quantos valores ímpares existem no _array_ e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

## Desafio fatorial

O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal `!`
Exemplo de 4 fatorial:
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

## Desafio de inverter palavra

Utilize a estrutura de repetição `for` para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a _string_ abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

```
De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join(); 
```
`let word = 'tryber'`

## Desafio dos asteriscos

Escreva um algoritmo que, dado um valor `n`, sendo `n > 1`, imprima na tela um quadrado feito de asteriscos de tamanho `n`. Por exemplo:

```
n = 5

*****
*****
*****
*****
*****
```

## Desafio da pirâmide de asteriscos

Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com `5` asteriscos de base. Por exemplo:

```
n = 5

*
**
***
****
*****
```

# Desafio dos asteriscos, parte 2

Agora, inverta o lado do triângulo. Por exemplo:

```
n = 5

    *
   **
  ***
 ****
*****
```

``` 
De olho na dica 👀: Esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços vazios também.
```