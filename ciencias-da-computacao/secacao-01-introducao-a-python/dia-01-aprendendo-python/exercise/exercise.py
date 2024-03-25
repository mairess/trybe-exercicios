# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

import random
import math

list_of_numbers = random.sample(range(1, 151), 10)

list_of_numbers


def return_max(number_one: int, number_two: int) -> int | float:

    return max(number_one, number_two)


def return_max_with_args(*args) -> int | float:
    """Accepts an arbitrary number of numeric arguments, returns highest value among them.

    Returns:
        int: The highest value among the numbers provided as arguments.
    """
    return max(args)


return_max(20, 10)

return_max_with_args(10, 20, 50, 900, 0)

return_max_with_args((10, "ten"), (20, "twenty"), (50, "fifty"), (90, "ninety"))


print(return_max.__doc__)
print(return_max_with_args.__doc__)


def bigger(number, other):
    if other > number:
        return other
    return number


# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

the_numbers = [13, 130, 120, 107, 85, 21, 67, 65, 110, 30]

print(sum(the_numbers) / len(the_numbers))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:


def asterisk_square(number):
    for _ in range(number):
        print(number * "*")


def asterisk_square_v2(number):
    counter = 1
    while counter <= number:
        print(number * "*")
        counter += 1


asterisk_square(10)

asterisk_square_v2(10)


# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


list_of_names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def longest_name(names):
    return max(list_of_names, key=len)


def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


longest_name(list_of_names)


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).


def paint_coverage(wall_square_length):
    paint_coverage_meter = 3
    paint_can_liters = 18
    paint_can_price = 80
    if wall_square_length <= paint_can_liters * paint_coverage_meter:
        return (1, 80)
    else:
        paint_can_needed = math.ceil(
            wall_square_length / (paint_can_liters * paint_coverage_meter)
        )
        cost = paint_can_needed * paint_can_price
        return (math.ceil(paint_can_needed), cost)


print(paint_coverage(540))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.


def is_triangle(side_1, side_2, side_3):
    if (
        side_1 + side_2 > side_3
        and side_1 + side_3 > side_2
        and side_2 + side_3 > side_1
    ):
        if side_1 == side_3 == side_1 == side_2:
            return "Equilateral triangle"
        elif side_1 == side_2 or side_2 == side_3 or side_3 == side_1:
            return "Isosceles triangle"
        elif side_1 != side_2 or side_2 != side_3 or side_3 != side_1:
            return "Scalene triangle"
    return "Is not a triangle"


is_triangle(40, 40, 40)
