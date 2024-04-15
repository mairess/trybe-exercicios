class Employee:
    def __init__(self, id_num, name) -> None:
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self) -> None:
        self._bucket = [None for i in range(10)]

    def get_address(self, id_num: int):
        return id_num % 10

    def insert(self, employee: Employee) -> None:
        address = self.get_address(employee.id_num)
        self._bucket[address] = employee

    def get_value(self, id_num: int):
        address = self.get_address(id_num)
        return self._bucket[address].name

    def has(self, id_num: int):
        address = self.get_address(id_num)
        return self._bucket[address] is not None

    def update_value(self, id_num: int, new_name: str) -> None:
        address = self.get_address(id_num)
        employee = self._bucket[address]
        employee.name = new_name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

    my_hashmap = HashMap()

    for id, num in employees:
        employee = Employee(id, num)
        my_hashmap.insert(employee)

    print(my_hashmap.get_value(23))

    print("old name:", my_hashmap.get_value(10))
    my_hashmap.update_value(10, "name30")
    print("new name:", my_hashmap.get_value(10))
