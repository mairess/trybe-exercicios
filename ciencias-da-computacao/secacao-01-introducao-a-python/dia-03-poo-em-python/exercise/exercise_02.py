#  Implemente uma classe Estatística

import statistics
from dataclasses import dataclass

numbers = [50, 25, 98, 550, 312, 312, 312, 1, 5, 33, 33]


@dataclass
class Statistic:
    numbers: list[float]

    def mean(self) -> float:
        total = 0
        for number in self.numbers:
            total += number
        return f"{total / len(self.numbers):.2f}"

    def median(self) -> float:
        half = len(self.numbers) // 2
        sorted_list = sorted(self.numbers)

        if not len(sorted_list) % 2:
            return (sorted_list[half - 1] + sorted_list[half]) / 2
        return sorted_list[half]

    def mode(self) -> float:
        number_mode_list = {}
        for number in self.numbers:
            if number in number_mode_list:
                number_mode_list[number] += 1
            else:
                number_mode_list[number] = 1
        return max(number_mode_list, key=number_mode_list.get)


your_numbers = Statistic(numbers)
print("your_numbers mean", your_numbers.mean())
print("your_numbers median", your_numbers.median())
print("your_numbers mode", your_numbers.mode())


# Pythonic --------------------------------------

#  Implemente uma classe Estatística


@dataclass
class Statistics:
    numbers: list[float]

    def mean(self) -> float:
        return f"{statistics.mean(self.numbers):.2f}"

    def median(self) -> float:
        return statistics.median(self.numbers)

    def mode(self) -> float:
        return statistics.mode(self.numbers)


my_numbers = Statistics(numbers)
print("my_numbers mean", my_numbers.mean())
print("my_numbers median", my_numbers.median())
print("my_numbers mode", my_numbers.mode())
