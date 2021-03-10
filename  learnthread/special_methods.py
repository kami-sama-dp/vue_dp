username = 'pu.deng'
password = 'Ma4651885804'

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

class Foo2:
    def __init__(self):
        pass

obj = Foo2()
print(type(obj))
print(type(Foo2))

class MyType(type):

    def __init__(self, what, bases=None, dict=None):
        super(MyType, self).__init__()

    def __call__(self, *args, **kwargs):
        obj = self.__new__()

# class PositiveInteger(int):
#
#   def __new__(cls, value):
#
#     return super(PositiveInteger, cls).__new__(cls, abs(value))
#
# i = PositiveInteger(-3)
#
# print(i)


class ListDemo:

    def __init__(self):
        self.__date = []
        self.__step = 0

    def __next__(self):
        if self.__step <= 0:
            raise StopIteration
        self.__step -= 1
        return self.__date[self.__step]

    def __iter__(self):
        return self

    def __setitem__(self, key, value):
        self.__date.insert(key, value)
        self.__step += 1

myList = ListDemo()
myList[0] = 2
myList[1] = 5
myList[2] = 8
for i in myList:
    print(i)


def intNum():
    print("开始执行")
    for i in range(5):
        yield i
        print("继续执行")
num = intNum()

print("=======生成器==========")
# print(next(num))
# print(next(num))
# print(num.__next__())
print("===========>")
for i in num:
    print(i)


class from_obj(object):
    def __init__(self, to_object):
        self.to_object = to_object


b = [1, 2, 3]
a = from_obj(b)
print(id(a.to_object))
print(id(b))

from sys import getrefcount

# a = [1, 2, 3]
# print(getrefcount(a))
# b = [a, a]
# # c = a
# print(getrefcount(b))
# # print(getrefcount(c))

x = [1, 2, 3]
y = [x, dict(key1=x)]
z = [y, (x, y)]
print(y)
print(z)

a = [1, 2, 3]
b = a
print(getrefcount(b))

a = 1
print(getrefcount(b))

c = 'very good sdadfa'
d = 'very good sdadfa'
print(c is d )

import sys
if __name__ == "__main__":
    print("=====================")
    zsx = 123
    print(getrefcount(zsx))
