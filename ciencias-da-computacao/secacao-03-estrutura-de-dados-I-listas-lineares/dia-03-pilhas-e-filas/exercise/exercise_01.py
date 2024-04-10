# Filas: crie uma classe Queue, onde deve conter as operações: enqueue, dequeue, peek e is_empty.

# Para este desafio, é necessário efetuar o import das classes LinkedList e Node e utilizar seus métodos de acesso para simular uma fila, respeitando o padrão FIFO.

from dia_02_nos_e_listas_encadeadas.linked_list_content import LinkedList

from dia_02_nos_e_listas_encadeadas.node import Node


class Queue:
    def __init__(self) -> None:
        self.__data = LinkedList()

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        if len(self.__data) == 0:
            return None

        return self.__data.remove_first()

    def peek(self):
        if len(self.__data) == 0:
            return None

        return self.__data.get_element_at(0)

    def is_empty(self):
        return not len(self.__data)


my_queue = Queue()

print(my_queue.is_empty())
