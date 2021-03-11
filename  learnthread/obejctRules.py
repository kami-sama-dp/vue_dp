class ObjectCreator(object):
    pass


my_object = ObjectCreator()
print(my_object)
print(ObjectCreator)


def echo(o):
    print(o)


echo(ObjectCreator)

print(hasattr(ObjectCreator, 'new_attribute'))

ObjectCreator.new_attribute = 'foo'
print(hasattr(ObjectCreator, 'new_attribute'))

print(ObjectCreator.new_attribute)

ObjectMirror = ObjectCreator
print(ObjectMirror)


def choose_class(name):
    if name == 'foo':
        class Foo(object):
            pass
        return Foo
    else:
        class Bar(object):
            pass
        return Bar


myClass = choose_class('foo')
print(myClass)
print(myClass())

print(type(1))
print(type('1'))
print(type(ObjectCreator))
print(type(ObjectCreator()))

# class MyShinyClass(object):
#     pass

MyShinyClass = type('MyShinyClass', (), {})
print(MyShinyClass)
print(MyShinyClass())

print("=================>")


# the metaclass will automatically get passed the same argument
# that is passed to `type()`
def upper_attr(class_name, class_parents, class_attr):
    '''Return a class object, with the list of its attribute turned into
    uppercase.
    '''
    # pick up any attribute that doesn't start with '__' and turn it into uppercase.
    uppercase_attr = {}
    for name, val in class_attr.items():
        if name.startswith('__'):
            uppercase_attr[name] = val
        else:
            uppercase_attr[name.upper()] = val

    # let `type` do the class creation
    return type(class_name, class_parents, uppercase_attr)


class Foo(metaclass=upper_attr):
    bar = 'bar'


print(hasattr(Foo, 'bar'))
# False

print(hasattr(Foo, 'BAR'))
# True

f = Foo()
print(f.BAR)
# 'bar'

print("=============单例==================")


class SingleTon:
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, '_instance'):
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance


s1 = SingleTon()
s2 = SingleTon()
print(s1 is s2)

print("============使用元类实现单例================")


class SingleTon1(type):

    def __init__(self, *args, **kwargs):
        print("__init__")
        self._instance = None
        super(SingleTon1, self).__init__(*args, **kwargs)

    def __call__(self, *args, **kwargs):
        print("__call__")
        if self._instance is None:
            self._instance = super().__call__(*args, **kwargs)
        return self._instance


class Foo2(metaclass=SingleTon1):
    pass



foo = Foo2()


class Student:
    def __init__(self, name, score):
        self._name = name
        self._score = score

    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, score):
        if not isinstance(score, int):
           raise ValueError("invalid score!!")
        if score < 0 or score > 100:
            raise ValueError("score must between [0,100]!")
        self._score = score

    @property
    def name(self):
        return self._name


s1 = Student("Lily", 80)
s1.score = 99
print(s1.score)
print(s1.name)

print("===============魔法方法===============")


# class Person(object):
#
#     def __del__(self):
#         print('__del__')
#
#
# a = Person()
# b = a
# del a
# print("exit")


# 合并2个有序list
def mergeTwoStr(str1, str2):
    len1 = len(str1)
    len2 = len(str2)
    pos = len1 + len2 - 1
    result = [0] * (len1 + len2)  # 构造长度为 len1 + len2 的一个新list
    m, n = len1 - 1, len2 - 1
    while m >= 0 and n >= 0:
        if str1[m] > str2[n]:
            result[pos] = str1[m]
            pos -= 1
            m -= 1
        else:
            result[pos] = str2[n]
            pos -= 1
            n -= 1
    # 将头部剩余的直接拼接到result的前半部分
    if m >= 0:
        result[:pos+1] = str1[:m+1]
    else:
        result[:pos+1] = str2[:n+1]
    return result


str1 = [1, 2, 3]
str2 = [-1, 4, 5, 6]
result = mergeTwoStr(str1, str2)
print(result)
str1 = [2, 3, 4, 5]
str2 = [3, 4, 5, 6]
result = mergeTwoStr(str1, str2)
print(result)
str1 = [1, 1, 1]
str2 = []
result = mergeTwoStr(str1, str2)
print(result)