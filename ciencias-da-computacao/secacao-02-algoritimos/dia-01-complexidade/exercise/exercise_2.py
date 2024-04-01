# 🚀 Exercício 2

# Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?


import random


def form_array(n, length):
    numbers_array = []
    for _ in range(length):
        random_numbers = [random.randint(1, 500) for _ in range(100)]
        average = sum(random_numbers) / n
        numbers_array.append(average)
    return numbers_array


print(form_array(10, 10))
