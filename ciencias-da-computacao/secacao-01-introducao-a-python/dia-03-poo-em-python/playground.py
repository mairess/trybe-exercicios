class Exemplo:
    def __init__(self):
        print("Inicializando Exemplo")

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance


class Very_good_one:
    def greeting(self):
        name = input("What is your name? ")
        print(f"Hello my friend {name}!")

    def farewell(self):
        print("See you, bye!")


class Blender:
    @property
    def color(self):
        return self.__color.upper()

    @property
    def price(self):
        return self.__price

    @color.setter
    def color(self, new_color):
        if new_color == "turquesa":
            raise ValueError("There is no blander with turquesa color!")
        self.__color = new_color

    @price.setter
    def price(self, new_price):
        if new_price < 0:
            raise ValueError("Price cannot be 0 or negative number")
        self.__price = new_price

    def __init__(self, color, power, voltage, price):
        self.color = color
        self.price = price
        self.__color = color
        self._power = power
        self._voltage = voltage
        self.__is_on = False
        self.__velocity = 0
        self.__top_velocity = 3
        self.__actual_engine_current = 0

    def is_on(self):
        return self.__is_on

    def velocity(self):
        return self.__velocity

    def get_actual_engine_current(self):
        return self.__actual_engine_current

    def __change_velocity(self, new_velocity):
        if new_velocity > self.__top_velocity or new_velocity < 0:
            raise ValueError(f"Velocity must be between 0 and {self.__top_velocity}")

        self.__velocity = new_velocity

        raw_data = ((self._power / self._voltage) / self.__top_velocity) * new_velocity

        self.__actual_engine_current = f"{raw_data:.2}"

    def select_velocity(self, new_velocity):
        self.__change_velocity(new_velocity)

    def turn_on(self, new_velocity):
        self.__change_velocity(new_velocity)
        self.__is_on = True

    def turn_off(self):
        self.__is_on = False
        self.select_velocity(0)

    def __str__(self) -> str:
        return f"""
        - Blender color: {self.color}
        - Blender price: {self.price}
        - Blender power: {self._power}
        - Blender voltage: {self._voltage}
        - Blender in_on: {self.__is_on}
        - Blender velocity: {self.__velocity}
        - Blender top velocity: {self.__top_velocity}
        - Blender actual current: {self.__actual_engine_current}
        """


my_blander = Blender("Blue", 200, 127, 200)
your_blander = Blender(color="Red", power=250, voltage=220, price=100)
your_blander.turn_on(1)
your_blander.select_velocity(3)
# your_blander.turn_off()
my_blander.color = "Green"

# print("my_blander is on?", my_blander.is_on())
# print("your_blander is on?", your_blander.is_on())
# print("your_blander velocity now:", your_blander.velocity())
# print(
#     "your_blander actual_engine_current now", your_blander.get_actual_engine_current()
# )

# print("my_blander is on?", my_blander.color)


class Person:
    def __init__(self, name, account_balance):
        self.name = name
        self.account_balance = account_balance
        self.blander = None

    def buy_new_blander(self, new_blander):
        if new_blander.price > self.account_balance:
            raise ValueError("You do not have enough balance to buy it!")
        self.account_balance -= new_blander.price
        self.blander = new_blander

    def __str__(self) -> str:
        return f"""
        - Person name: {self.name}
        - Person account balance: {self.account_balance}
        """


# my_blander.price = 221

cooking_person = Person("Vitória", 500)
expensive_blander = Blender("yellow", 500, 220, 500)

# cooking_person.buy_new_blander(your_blander)
cooking_person.buy_new_blander(expensive_blander)
# cooking_person.buy_new_blander(my_blander)

# print(cooking_person.name)
# print(cooking_person.account_balance)
# print(cooking_person.blander)
# print(expensive_blander.price)

print(cooking_person)
print(your_blander)
