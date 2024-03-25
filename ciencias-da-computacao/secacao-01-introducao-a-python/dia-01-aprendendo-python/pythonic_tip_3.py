import random
from collections import Counter

list_of_numbers = []

for num in range(10000):
    list_of_numbers.append(random.randint(0, 1000))


print(list_of_numbers)

min(list_of_numbers)

max(list_of_numbers)

array = [1, 1, 2]

counter = Counter(list_of_numbers)
counter_array = Counter(array)

print(counter[23])

print(counter_array)


most_common = counter.most_common()

print(most_common)

most_common_element, number_of_times = most_common[0]

print(most_common_element, number_of_times)
