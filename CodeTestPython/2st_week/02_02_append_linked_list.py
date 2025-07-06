class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    # LinkedList의 가장 끝에 있는 노드에 새로운 노드를 연결해줘
    def append(self, value):
        current = self.head

        while current.next is not None:
            current = current.next
        current.next = Node(value)

    # Linked_list에서 저장한 head를 따라가면서 현재 있는 노드들을 전부 출력하는 함수
    def print_all(self):
        current = self.head
        while current is not None:
            # print('node', current.data, 'next', current.next)
            print(current.data)
            current = current.next

linked_list = LinkedList(5)

linked_list.append(12)

linked_list.append(8)

linked_list.print_all()
