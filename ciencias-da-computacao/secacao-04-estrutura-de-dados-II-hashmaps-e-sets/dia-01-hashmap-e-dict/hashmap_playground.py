class Employees:
    def __init__(self, id_num, name) -> None:
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self) -> None:
        self._bucket = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee: Employees) -> None:
        address = self.get_address(employee.id_num)
        self._bucket[address] = employee

    def get_value(self, id_num: int):
        address = self.get_address(id_num)
        return self._bucket[address].name

    def has(self, id_num: int):
        address = self.get_address(id_num)
        return self._bucket[address] is not None
