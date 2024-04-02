# def calculations(n):
#     number1 = 0
#     for n1 in range(n):
#         number1 += n1

#     number2 = 0
#     for n1 in range(n):
#         for n2 in range(n):
#             number2 += n1 + n2

#     number3 = 0
#     for n1 in range(n):
#         for n2 in range(n):
#             for n3 in range(n):
#                 number3 += n1 + n2 + n3

#     return number1, number2, number3


# n1, n2, n3 = calculations(800)
# print(f"{n1}, {n2}, {n3}")


def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista
    for index in range(0, n):  # vamos iterar a lista completa
        if numbers[index] == target:  # se encontrar o elemento alvo, retorne a posição
            return index

    return -1  # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
