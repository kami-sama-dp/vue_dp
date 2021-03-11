from celery import Celery
import time
BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/1'
celery = Celery('tasks', broker=BROKER_URL, backend=CELERY_RESULT_BACKEND)

@celery.task
def reverse(string):
    time.sleep(10)
    return string[::-1]

class Solution:
    def validPalindrome(self, s: str) -> bool:
        isPalindrome = lambda s : s == s[::-1]
        left = 0
        right = len(s) - 1
        while left <right :
            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                print(isPalindrome(s[1.]))
                return True
                # return isPalindrome(s[left+1, right+1]) or isPalindrome(s[left, right])
        return True

