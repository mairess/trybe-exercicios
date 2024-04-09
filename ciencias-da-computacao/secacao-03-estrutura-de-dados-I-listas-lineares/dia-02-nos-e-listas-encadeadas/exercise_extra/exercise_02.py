# Remover duplicatas de uma DoublyLinkedList, atividade extraída e adaptada do LeetCode. Nesta atividade será necessário implementar um algoritmo que receba uma DoublyLinkedList como argumento e retorne uma nova lista, sem elementos que possuem mais de uma ocorrência.

# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2


# def deleteDuplicates(head):
#     dummy = head(0)
#     dummy.next = head
#     prev = dummy

#     while head and head.next:
#         if head.val == head.next.val:
#             while head and head.next and head.val == head.next.val:
#                 head = head.next
#             head = head.next
#             prev.next = head
#         else:
#             prev = prev.next
#             head = head.next
#     return dummy.next


class DoublyLinkedList:
    # ...
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def delete_duplicates(linked_list):
    list_with_unique_elements = DoublyLinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if linked_list.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
