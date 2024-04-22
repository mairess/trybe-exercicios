class Conjunto:
    def __init__(self) -> None:
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def remove(self, item) -> None:
        self.set[item] = False

    def search(self, item) -> int | None:
        return self.set[item]

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, set_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or set_b.set[index]:
                new_set.add(index)
        return new_set

    def intersection(self, set_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and set_b.set[index]:
                new_set.add(index)

        return new_set

    def difference(self, set_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and not set_b.set[index]:
                new_set.add(index)

        return new_set

    def issubset(self, set_b):
        for index in range(1001):
            if self.set[index] and not set_b.set[index]:
                return False

        return True

    def issuperset(self, set_b):
        for index in range(1001):
            if set_b.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    my_set = Conjunto()

    for item in [0, 10, 100, 1000]:
        my_set.add(item)
    print(my_set)

    my_set_2 = Conjunto()

    for item in [1, 2, 3]:
        my_set_2.add(item)
    print(my_set_2)

    my_set_3 = Conjunto()
    for index in [7, 2, 10]:
        my_set_3.add(index)
    print(my_set_3)

    my_set_4 = Conjunto()
    print(my_set_4)

    my_set_5 = Conjunto()
    for index in [1, 2, 3]:
        my_set_5.add(index)

    print(my_set_5)
    print(1 in my_set_5)
    print(0 in my_set_5)

    my_set_6 = Conjunto()
    for index in range(1, 11):
        my_set_6.add(index)

    my_set_7 = Conjunto()
    for index in range(10, 21):
        my_set_7.add(index)

    my_set_8 = my_set_6.union(my_set_7)
    print(my_set_8)

    my_set_9 = Conjunto()
    for index in [1, 2, 3]:
        my_set_9.add(index)

    my_set_10 = Conjunto()
    for index in [7, 2, 10]:
        my_set_10.add(index)

    my_set_11 = my_set_9.intersection(my_set_10)
    print(my_set_11)

    my_set_12 = Conjunto()
    for index in [1, 2, 3]:
        my_set_12.add(index)

    my_set_13 = Conjunto()
    for index in [7, 2, 10]:
        my_set_13.add(index)

    my_set_14 = my_set_12.difference(my_set_13)
    print(my_set_14)

    my_set_15 = Conjunto()
    for index in [1, 2, 3]:
        my_set_15.add(index)

    my_set_16 = Conjunto()
    for index in [7, 2, 10]:
        my_set_16.add(index)

    my_set_17 = Conjunto()
    my_set_18 = my_set_15.union(my_set_16)

    print(my_set_15.issubset(my_set_18))
    print(my_set_18.issuperset(my_set_15))
    print(my_set_17.issubset(my_set_18))

    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    for elem in estudantes:
        conj_estudantes.add(elem)

    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print("Quem já entregou pelo menos uma lista:",
          conj_lista1.union(conj_lista2))
    print(
        "Quem não entregou nenhuma:",
        conj_estudantes.difference(conj_lista1.union(conj_lista2)),
    )
