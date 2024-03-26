# Para fixar

# Exercício 1:
# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:

# F
# U
# L
# A
# N
# O


# def print_name(name: str) -> None:
#     for char in name:
#         print(char)


# print_name("João Cabral de Melo Neto")


# Exercício 2:

# Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.


import sys

numbers = input("Type your numbers separated by blank space: ")
count = 0
error = False
for number in numbers.split(" "):
    if number.isdigit():
        count += int(number)
    else:
        error = True
        print(f"Error when summing the values, '{number}' is not valid!", file=sys.stderr)
if not error:
    print(count)
