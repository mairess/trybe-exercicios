# Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

# Exemplo 1:
cartas_01 = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas_02 = [1, 4, 4, 7, 6, 6, 9, 3, 5, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def shuffle_cards(cards: list[int], card_per_part) -> list[int]:
    if len(cards) % card_per_part != 0:
        card_per_part = len(cards) // 2

    part_one = cards[:card_per_part]
    part_two = cards[card_per_part:]

    shuffled = []

    for index in range(card_per_part):
        shuffled.append(part_one[index])
        shuffled.append(part_two[index])

    return shuffled


#  complexity is O(n)


if __name__ == "__main__":
    print(shuffle_cards(cartas_01, 2))

    print(shuffle_cards(cartas_02, 3))
