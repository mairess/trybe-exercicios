# import random

# import time

# import numpy as np


# start = time.time()


# def sum_array(numbers):
#     sum = 0
#     for number in numbers:
#         sum += number

#     return sum


# array_length = 200000


# array_random = [random.randint(1, 50000) for number in range(array_length)]

# array2_length = 200000


# array2_random = [random.randint(1, 50000) for number in range(array2_length)]


# result = np.sum(array_random)

# # sum(array_random)


# def squared_array(numbers):
#     array_of_squares = []
#     for number in numbers:
#         array_of_squares.append(number * number)

#     return array_of_squares


# def multiply_arrays(array1, array2):
#     result = []
#     for number1 in array1:
#         for number2 in array2:
#             result.append(number1 + number2)

#     return result


# multiply_arrays(array_random, array2_random)


# def multiply_arrays(array1, array2):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         print(f'Array 1: {number1}')
#         for number2 in array2:
#             print(f'Array 2: {number2}')
#             result.append(number1 * number2)
#             number_of_iterations += 1

#     print(f'{number_of_iterations} iterações!')
#     return result


# meu_array = [1, 2, 3, 4, 5]

# multiply_arrays(meu_array, meu_array)


# array_length = 200


# array_random = [random.randint(1, 50000) for number in range(array_length)]

# array2_length = 20000


# array2_random = [random.randint(1, 50000) for number in range(array2_length)]


# def multiply_arrays(array1, array2):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         print(f"Array 1: {number1}")
#         for number2 in array2:
#             print(f"Array 2: {number2}")
#             result.append(number1 * number2)
#             number_of_iterations += 1

#     print(f"{number_of_iterations} iterações!")
#     return result


# meu_array = [1, 2, 3, 4, 5]

# multiply_arrays(array_random, array2_random)


# end = time.time()
# execution_time = end - start
# print("Execution time:", execution_time, "seconds")
