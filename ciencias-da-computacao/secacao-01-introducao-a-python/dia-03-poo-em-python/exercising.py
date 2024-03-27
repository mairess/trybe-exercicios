class Fan:
    @property
    def color(self):
        return self.__color.upper()

    @property
    def is_on(self):
        return self.__is_on

    @property
    def velocity(self):
        return self.__velocity

    @property
    def voltage(self):
        return self.__voltage

    @property
    def price(self):
        return self.__price

    @color.setter
    def color(self, nova_cor):
        self.__color = nova_cor

    @velocity.setter
    def velocity(self, nova_velocity):
        if nova_velocity <= 0 or nova_velocity > 4:
            raise ValueError("Velocity must be between 1 an 4")
        self.__velocity = nova_velocity

    @voltage.setter
    def voltage(self, new_voltage):
        self.__voltage = new_voltage

    @price.setter
    def price(self, new_price):
        self.__price = new_price

    def __init__(self, color, velocity, voltage, price):
        self.__color = color
        self.__velocity = velocity
        self.__voltage = voltage
        self.__price = price
        self.__top_velocity = 4
        self.__is_on = False

    def __change_velocity(self, new_velocity):
        if new_velocity > self.__top_velocity or new_velocity < 0:
            raise ValueError(f"Velocity must be between 0 and {self.__top_velocity}")

        self.__velocity = new_velocity

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
        - Fan color: {self.__color}
        - Fan velocity: {self.__velocity}
        - Fan voltage: {self.__voltage}
        - Fan price: {self.__price}
        - Fan top velocity: {self.__top_velocity}
        - Fan is on: {self.__is_on}
        """


class Person:
    def __init__(self, name, account_balance):
        self.name = name
        self.account_balance = account_balance
        self.fan = None

    def buy_new_fan(self, new_fan):
        if new_fan.price > self.account_balance:
            raise ValueError("You do not have enough balance to buy it!")
        self.account_balance -= new_fan.price
        self.fan = new_fan

    def __str__(self) -> str:
        return f"""
        - Person name: {self.name}
        - Person account balance: {self.account_balance}
        """


person_melting = Person("Julia", 600)
expensive_fan = Fan("green", 4, 220, 450)

print(person_melting)
print(expensive_fan)


person_melting.buy_new_fan(expensive_fan)
expensive_fan.turn_on(3)

print(person_melting)
print(expensive_fan.velocity)
