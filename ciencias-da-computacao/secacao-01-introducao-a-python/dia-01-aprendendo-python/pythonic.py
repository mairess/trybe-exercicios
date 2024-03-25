names_1 = ["Alice", "Bob", "Charlie", "David"]
names_2 = ["David", "Eve", "Frank", ""]
numbers_1 = [1, 2, 3, 4]
numbers_2 = [0, 5, 6, 7]


is_iterable = all(numbers_2)


is_iterable


for element in enumerate(names_1):
    print(element)


for index, element in enumerate(names_1):
    print(index, element)
