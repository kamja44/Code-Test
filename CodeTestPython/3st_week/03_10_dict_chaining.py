class LinkedTuple:
    def __init__(self):
        self.items = []

    def add(self, key, value):
        self.items.append((key, value))

    def get(self, key):
        for k, v in self.items:
            if k == key:
                return v


class LinkedDict:
    def __init__(self):
        self.items = []
        for i in range(8):
            self.items.append(LinkedTuple())

    def put(self, key, value):
        index = hash(key) % len(self.items)
        self.items[index].add(key, value) # index 번째의 LinkedTuple [(key, value)]가 들어감

    def get(self, key):
        index = hash(key) % len(self.items)
        return self.items[index].get(key)

my_dict = LinkedDict()
my_dict.put('test', 3)
print(my_dict.get('test'))
