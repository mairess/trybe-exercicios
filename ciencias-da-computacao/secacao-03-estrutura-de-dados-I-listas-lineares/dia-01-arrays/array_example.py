"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""

import sys


class ListaArray:
    # def __init__(self, value):
    #     self.data = []
    #     self.value = value

    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def __getitem__(self, index):  # add by me @mairess
        return self.data[index]

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.remove(index)
        return self.set(index, value)

    def update_2(self, index, value):
        self.value[index] = value


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print("array memory size:", array_memory_size)  # 56


array.set(0, "Felipe")
array.set(1, "Ana")

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print("array memory size:", array_memory_size)  # 88

array.set(2, "Shirley")
array.set(3, "Miguel")

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print("array memory size:", array_memory_size)  # 88

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print("array memory size:", array_memory_size)  # 88

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(3))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

print(array)
array.remove(0)
print(array)

array.update(0, "Little potato")
print(array)
