import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


from timer import Cronometro
from insertion_sort import insertion_sort
from selection_sort import selection_sort
from bubble_sort import bubble_sort
from merge_sort import merge_sort


# Exercício 1 Dado um array com os seguintes elementos
# ["zebra", "macaco", "elefante", "arara", "javali"],
# após duas iterações utilizando bubble sort, como estaria este array?

# ---> ['macaco', 'elefante', 'zebra', 'arara', 'javali']


# Exercício 2 Demonstre o passo a passo do processo de mistura de um array, sendo ordenado utilizando merge sort. Comece o passo a passo a partir da linha abaixo:

#  7 3    5 4    6 8    2 1

# 7  3  5  4  6  8  1  2

# 3 7  4 5   6 8  1  2

# 3 4 5 7   1 2 6 8

# 1 2 3 4 5 6 7 8


# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.

from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


# with Cronometro("algoritmo"):
#     insertion_sort(ordenados)
#     insertion_sort(inversamente_ordenados)
#     insertion_sort(aleatorios)
#     selection_sort(ordenados)
#     selection_sort(inversamente_ordenados)
#     selection_sort(aleatorios)


# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.


with Cronometro("algoritmo"):
    # merge_sort(ordenados)
    # merge_sort(inversamente_ordenados)
    # merge_sort(aleatorios)
    # bubble_sort(ordenados)
    # bubble_sort(inversamente_ordenados)
    bubble_sort(aleatorios)