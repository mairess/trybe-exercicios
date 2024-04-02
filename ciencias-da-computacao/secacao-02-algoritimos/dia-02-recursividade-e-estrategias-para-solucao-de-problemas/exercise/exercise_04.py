# 🚀 Exercício 4:

# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.


def get_gcd(a: int, b: int) -> int:
    if b == 0:
        return a
    else:
        return get_gcd(b, a % b)


print(get_gcd(70, 25))
