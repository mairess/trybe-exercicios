# Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.


# 1 - OK
# 0 - Instabilidades


def max_sequence(array: list[int]) -> int:
    counter, result = 0, 0
    for index in array:
        if index == 1:
            counter += 1
            result = max(counter, result)
        else:
            counter = 0
    return result


valores_coletados_01 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

print(max_sequence(valores_coletados_01))


valores_coletados_02 = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

print(max_sequence(valores_coletados_02))
