# 🚀 Exercício 1:

# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


# def count_even_number(n: int) -> int:
#     counter = 0
#     for number in range(1, n + 1):
#         if number % 2 == 0:
#             counter += 1
#     return counter


# print(count_even_number(10))


def count_even_number(n: int) -> int:
    counter = sum(1 for number in range(1, n + 1) if number % 2 == 0)
    return counter


print(count_even_number(10))


# 🚀 Exercício 2:

# Transforme o algoritmo criado acima em recursivo.


def count_even_number(n: int) -> int:
    if n == 0:
        return 0
    else:
        return (n % 2 == 0) + count_even_number(n - 1)


print(count_even_number(10))
