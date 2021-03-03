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

class SingleTon1:

    def __init__(self, *args, **kwargs):
        print("__init__")
        self._instance = None
        super(SingleTon1, self).__init__(*args, **kwargs)

    def __call__(self, *args, **kwargs):
        print("__call__")
        if self._instance is None:
            self._instance = super(SingleTon1, self).__call__(*args, **kwargs)
        return self._instance


class Foo2():
    __metaclass__ = SingleTon1


foo = Foo2()

