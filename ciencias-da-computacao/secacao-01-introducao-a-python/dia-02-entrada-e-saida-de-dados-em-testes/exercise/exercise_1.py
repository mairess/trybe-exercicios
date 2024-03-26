# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

# Entrada:
# PEDRO

# Saída:
# PEDRO
# PEDR
# PED
# PE
# P


def triangle(name):
    for char in range(len(name), 0, -1):
        print(name[:char])
