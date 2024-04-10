# Pilhas: crie uma classe Stack, onde deve conter as operações: push, pop, peek e is_empty.

from ..dia_02_nos_e_listas_encadeadas.linked_list_content import LinkedList


class Stack:
    def __init__(self) -> None:
        self.__data = LinkedList()

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        if len(self.__data) == 0:
            return None

        return self.__data.remove_last()

    def peek(self):
        if len(self.__data) == 0:
            return None

        return self.__data.get_element_at(len(self.__data))

    def is_empty(self):
        return not len(self.__data)
