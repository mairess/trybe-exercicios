from dataclasses import dataclass
from functools import cache


# @cache
# def fibonacci(n):
#     if n <= 1:
#         print("ativou")
#         return n
#     else:
#         print("ativou")
#         return fibonacci(n - 1) + fibonacci(n - 2)


# print(fibonacci(5))


@dataclass
class Person:
    name: str
    last_name: str
    age: int


diego = Person("Diego", "Silva", 34)
eliane = Person("Eliane", "Oliveira", 30)

print(diego)
print(eliane)

print(diego != eliane)
