from abc import ABC, abstractmethod


class GeometricFigure(ABC):
    @abstractmethod
    def area(self): ...

    def perimeter(self): ...


class Square(GeometricFigure):
    def __init__(self, side: float):
        self.side = side

    def area(self) -> float:
        return self.side**2

    def perimeter(self) -> float:
        return 4 * self.side


class Rectangle(GeometricFigure):
    def __init__(self, base: float, height: float):
        self.base = base
        self.height = height

    def area(self) -> float:
        return self.base * self.height

    def perimeter(self) -> float:
        return (self.base + self.height) * 2


class Circle(GeometricFigure):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return f"{3.14 * self.radius**2:.2f}"

    def perimeter(self) -> float:
        return f"{3.14 * self.radius * 2:.2f}"


my_square = Square(10)
my_rectangle = Rectangle(10, 15)
my_circle = Circle(8.4)

print("Square ---------------------------------------------------")

print(my_square.area())
print(my_square.perimeter())
print(my_square.side)

print("Rectangle ------------------------------------------------")
print(my_rectangle.area())
print(my_rectangle.perimeter())
print(my_rectangle.base)
print(my_rectangle.height)

print("Circle ----------------------------------------------------")
print(my_circle.area())
print(my_circle.perimeter())
print(my_circle.radius)
