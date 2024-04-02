# 🚀 Exercício 3:

# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def get_max_int(numbers: list[int], index=0, max_int=0) -> int:
    if index == len(numbers):
        return max_int
    else:
        number = numbers[index]
        if isinstance(number, int):
            if max_int == 0 or number > max_int:
                max_int = number
        return get_max_int(numbers, index + 1, max_int)


numbers_array = [25.3, 10, 9, 8, 7, 70, 6, 4, 3, 2, 1]

print(get_max_int(numbers_array))
