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

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto


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
    for i in [7, 2, 10]:
        my_set_10.add(index)

    my_set_11 = my_set_9.intersection(my_set_10)
    print(my_set_11)
