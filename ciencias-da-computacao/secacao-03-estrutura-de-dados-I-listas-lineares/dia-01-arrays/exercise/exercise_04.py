# Você têm dois arrays de números inteiros que representam:

# I - instantes de entrada e saídas em uma biblioteca
# II - um número que represente um instante a ser buscado.

# Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
# Considere que todo estudante entrou e saiu da biblioteca.


# entradas = [1, 2, 3]
# saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

entradas = [1, 2, 3]
saidas = [3, 2, 7]


def get_instant(arrivals: list[int], departures: list[int], target: int) -> int:
    counter = 0
    for index in range(0, len(arrivals)):
        if arrivals[index] <= target <= departures[index]:
            counter += 1
    return counter


#  complexity is O(n)

if __name__ == "__main__":
    print(get_instant(entradas, saidas, 2))
