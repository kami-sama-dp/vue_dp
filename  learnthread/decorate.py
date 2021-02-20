import time

def timethis(func):
    def inner(*args, **kwargs):
        print('start timer:')
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print('end timer: %fs.' % (end - start))
        return result
    return inner

@timethis
# 等价于 sleeps = timethis(sleeps)  sleeps已经指向inner了
def sleeps(seconds):
    print('sleeps begins:')
    time.sleep(seconds)
    print('sleep %d  seconds. sleep over.' % seconds)
    return seconds

print(sleeps(3))