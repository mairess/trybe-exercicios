# Exercício 1

# Dado um array de números de tamanho n, escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.


# import random


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# numbers_array = [random.randint(1, 500) for number in range(10)]
# print(contains_duplicate([5, 5, 2, 654, 654, 9687, 9874]))
