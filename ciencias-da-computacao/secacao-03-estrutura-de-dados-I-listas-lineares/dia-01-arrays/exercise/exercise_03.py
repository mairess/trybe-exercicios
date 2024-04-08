# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

# Exemplo 1:
produtos_1 = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
produtos_2 = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def good_combination(products: list[int]) -> int:
    combinations = []
    for index, number in enumerate(products):
        for item in range(index + 1, len(products)):
            if number == products[item]:
                combinations.append((index, item))
    return len(combinations)


#  complexity is O(n²)


def good_combination_pythonic(products: list[int]) -> int:
    dict = {}
    combinations = 0
    for index, number in enumerate(products):
        if number in dict:
            combinations += len(dict[number])
            dict[number].append(index)
        else:
            dict[number] = [index]
    return combinations


#  complexity is O(n)

if __name__ == "__main__":
    print(good_combination(produtos_1))
    print(good_combination(produtos_2))

    print(good_combination_pythonic(produtos_1))
    print(good_combination_pythonic(produtos_2))
