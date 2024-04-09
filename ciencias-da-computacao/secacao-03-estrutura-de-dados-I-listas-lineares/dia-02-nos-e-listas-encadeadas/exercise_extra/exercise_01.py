# Dada uma LinkedList ordenada, crie uma função que recebe essa LinkedList como argumento e remove os elementos repetidos, mantendo a ordenação da lista. Essa função deve respeitar a complexidade O(n) e retornar a lista ao final.

# Dica: Essa questão costuma aparecer em processos seletivos. Não é a toa que ela está disponível em plataformas de prática de algoritmos como por exemplo LeetCode, que utilizamos como fonte para esse exercício.

# Exemplo:

# Copiar
# input: 1 -> 1 -> 2
# saída: 1 -> 2

# Input: head = [1,1,2]
# Output: [1,2]

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3

# Input: head = [1, 1, 2, 3, 3]
# Output: [1,2,3]


def delete_duplicates(linked_list):
    if len(linked_list) <= 1:
        return linked_list

    current_element = linked_list.head_value

    while current_element and current_element.next:
        if current_element.value == current_element.next.value:
            current_element.next = current_element.next.next
        else:
            current_element = current_element.next

    return linked_list


print(delete_duplicates([1, 1, 2, 3, 3]))
