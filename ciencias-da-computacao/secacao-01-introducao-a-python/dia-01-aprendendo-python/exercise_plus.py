# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(min(numbers))


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def asterisk_triangle(number):
    for number in range(number):
        print((number + 1) * "*")


asterisk_triangle(5)

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.


def sum_every_number(*args):
    return sum(args)


sum_every_number(50, 60, 10, 1)


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def get_price(liters, fuel_type):
    ethanol_20_liters_discount = 1.9 * (1 - (3 / 100))
    ethanol_more_then_20_discount = 1.9 * (1 - (5 / 100))
    gas_20_liters_discount = 2.5 * (1 - (4 / 100))
    gas_more_then_20_discount = 2.5 * (1 - (6 / 100))

    if liters <= 20:
        if fuel_type == "Gas":
            return liters * gas_20_liters_discount
        else:
            return liters * ethanol_20_liters_discount
    else:
        if fuel_type == "Gas":
            return liters * gas_more_then_20_discount
        else:
            return liters * ethanol_more_then_20_discount


get_price(20, "Gas")
get_price(21, "Gas")

get_price(20, "ethanol")
get_price(21, "ethanol")

