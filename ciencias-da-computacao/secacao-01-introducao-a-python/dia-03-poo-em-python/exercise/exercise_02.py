#  Implemente uma classe Estatística

from dataclasses import dataclass


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


my_numbers = Statistic([50, 25, 98, 550, 312, 312, 312, 1, 5, 33, 33])
# print(my_numbers.median())
# print(my_numbers.mean())
print(my_numbers.mode())
