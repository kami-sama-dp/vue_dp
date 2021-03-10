def binary_search(arr, target):
    n = len(arr)
    left = 0
    right = n - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] > target:
            right = mid - 1
        elif arr[mid] < target:
            left = mid + 1
        else:
            print(f'index:{mid}, value:{arr[mid]}')
            return True
    return False

# 单例
class Book:
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, '_ins'):
            cls._ins = super().__new__(cls)
            print("in __new__")
        return cls._ins

    def __init__(self, title):
        print("in __init__")
        super(Book, self).__init__()
        self.title = title

if __name__ == "__main__":
    # arr = [1, 3, 4, 5, 6, 7, 8]
    # binary_search(arr, 3)

    b = Book("The Spider Book")
    b2 = Book("The Flask Book")
    print(id(b))
    print(id(b2))
    print(b.title)
    print(b2.title)