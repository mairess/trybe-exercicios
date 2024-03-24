def imc(weight: int, height: int) -> float:
    return weight / (height / 100) ** 2


imc(80, 191)

imc(weight=80, height=191)


def concat_like_tuple(*args):
    final_string = ""
    for index, name in enumerate(args, 1):
        final_string += f"O nome da pessoa {index} é {name}.\n"
    return final_string


def concat_like_dict(**kwargs):
    final_string = (
        f'{kwargs["nome"]} {kwargs["sobrenome"]} tem {kwargs["idade"]} anos.\n'
    )
    return final_string


def my_sum(*kwargs: float) -> float:
    return sum(kwargs)


my_sum(5, 4, 1)

concat_like_tuple("Cris", "Wallace", "Carol")

concat_like_dict(nome="Felipe", sobrenome="Silva", idade=25)


x = 10


def increment(x):
    x += 1
    return x


print(increment(x))
print(x)
