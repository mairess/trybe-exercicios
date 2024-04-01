from timeit import timeit


def BuscaLinear(lista, elemento):
    for i in range(len(lista)):
        if lista[i] == elemento:
            return elemento


def BuscaBinaria(lista, alvo):
    primeiro = 0
    ultimo = len(lista) - 1
    index = -1
    while (primeiro <= ultimo) and (index == -1):
        meio = (primeiro + ultimo) // 2
        if lista[meio] == alvo:
            index = meio
        else:
            if alvo < lista[meio]:
                ultimo = meio - 1
            else:
                primeiro = meio + 1
    return index


lista_mil = list(range(1, 1001))
lista_cem_mil = list(range(1, 100001))
# lista_dez_milhoes = list(range(1, 10000001))
# lista_bilhao = list(range(1, 1000000001))

alvo_mil = lista_mil[-1] * 0.9
alvo_cem_mil = lista_cem_mil[-1] * 0.9
# alvo_dez_milhoes = lista_dez_milhoes[-1]*0.9
# alvo_bilhao = lista_bilhao[-1]*0.9

print(
    ">> Tempo de execução para busca linear em 1000 elementos: "
    + str(timeit(lambda: BuscaLinear(lista_mil, alvo_mil), number=1))
)
print(
    ">> Tempo de execução para busca linear em 1000000 elementos: "
    + str(timeit(lambda: BuscaLinear(lista_cem_mil, alvo_cem_mil), number=1))
)
# print(">> Tempo de execução para busca linear em 10000000 elementos: " + str(timeit(lambda: BuscaLinear(lista_dez_milhoes, alvo_dez_milhoes), number=1)))
# print(">> Tempo de execução para busca linear em 1000000000 elementos: " + str(timeit(lambda: BuscaLinear(lista_bilhao, alvo_bilhao), number=1)))

print(
    ">> Tempo de execução para busca binária em 1000 elementos: "
    + str(timeit(lambda: BuscaBinaria(lista_mil, alvo_mil), number=1))
)
print(
    ">> Tempo de execução para busca binária em 1000000 elementos: "
    + str(timeit(lambda: BuscaBinaria(lista_cem_mil, alvo_cem_mil), number=1))
)
# print(">> Tempo de execução para busca binária em 10000000 elementos: " + str(timeit(lambda: BuscaBinaria(lista_dez_milhoes, alvo_dez_milhoes), number=1)))
# print(">> Tempo de execução para busca binária em 1000000000 elementos: " + str(timeit(lambda: BuscaLinear(lista_bilhao, alvo_bilhao), number=1)))
