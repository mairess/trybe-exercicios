# def countdown(n):
#     print(n)
#     countdown(n - 1)  # chamada recursiva


# countdown(5)


# Nome da função e parâmetro:
#     Condição de parada

#     Chamada de si mesma / recursiveness


# def countdown(n):
#     if n == 0:
#         print("FIM!")
#     else:
#         print(n)
#         countdown(n - 1)  # chamada recursiva


# countdown(5)


def factorial(n):
    if n <= 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo


print(factorial(5))
