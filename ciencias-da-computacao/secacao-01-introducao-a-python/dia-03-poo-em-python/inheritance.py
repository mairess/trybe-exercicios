class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def say_hello(self, value):
        print(f"Hello from Eletrodomestico {value}")

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Blender(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)

    @property
    def print_hello(self):
        print("Hello from Blender!")

    def print_hello_from_super_class(self):
        super().say_hello("Here is Blender")


class Dryer(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)

    @property
    def print_hello(self):
        print("Hello from Dryer!")

    def print_hello_from_super_class(self):
        super().say_hello("Here is Dryer")


class Mixer(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)

    @property
    def print_hello(self):
        print("Hello from Mixer!")

    def print_hello_from_super_class(self):
        super().say_hello("Here is Mixer")


class Washing_Machine(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)

    @property
    def print_hello(self):
        print("Hello from Mixer!")

    def print_hello_from_super_class(self):
        super().say_hello("Here is Washing Machine")


my_blander = Blender("Blue", 500, 220, 200)
my_Mixer = Mixer("Yellow", 230, 130, 321)
my_Dryer = Dryer("Yellow", 200, 120, 300)
my_Washing_Machine = Washing_Machine("Green", 600, 127, 1500)

my_blander.print_hello_from_super_class()
my_Mixer.print_hello_from_super_class()
my_Dryer.print_hello_from_super_class()
my_Washing_Machine.print_hello_from_super_class()


# class A:
#     def faz_algo(self, valor):
#         print(valor)


# class B(A):
#     def faz_outra_coisa(self):
#         print("Vou printar o valor pelo método criado em A")
#         # Chama o método da classe A, que neste caso é a superclasse, passando
#         # o `self` explicitamente
#         # A.faz_algo(self, valor=1)
#         super().faz_algo(valor=1)


# b = B()
# b.faz_outra_coisa()
# # Vou printar o valor pelo método criado em A
# # 1
