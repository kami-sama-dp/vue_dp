class Foo:
    """ 描述类信息"""
    def func(self):
        pass

    def __call__(self, *args, **kwargs):
        print("__call__")

    def __str__(self):
        return 'Foo_strings'

    def __getitem__(self, item):
        print('__getitem__:', item)

    def __setitem__(self, key, value):
        print("__setitem__:", key, value)

    def __delitem__(self, key):
        print("__delitem__:", key)

    def __getslice(self, i, j):
        print('__getslice', i,j)

    def __setslice__(self, i, j, sequence):
        print("__setslice__", i, j, sequence)

    def __delslice__(self, i, j):
        print("__delslice__", i, j)

obj = Foo()
result = obj['k1']
obj['k2'] = 'maple'
del obj['k1']
obj[-1: 1]
obj[0:1] = [11, 22, 33, 44]
del obj[0:2]

print(Foo.__doc__)

from lib.aa import C
obj = C()
print(obj.__module__)
print(obj.__class__)

obj = Foo()
obj()

class Province:
    country = "China"

    def __init__(self, name, count):
        self.name = name
        self.count = count

    def func(self):
        print("func")

    def __str__(self):
        return "string"

# print(Province.__dict__)
# obj = Province('HeBei', 100)
# print(obj.__dict__)
# obj2 = Province("HeNan", 300)
# print(obj2.__dict__)
# obj = Foo()
# print(obj)

class Foo1:
    def __init__(self, sq):
        self.sq = sq

    def __iter__(self):
        return iter(self.sq)

obj = Foo1([11, 22, 33, 44])
for i in obj:
    print(i)