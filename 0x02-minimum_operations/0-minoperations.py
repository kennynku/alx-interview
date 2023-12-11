#!/usr/bin/python3
'''
Calculating the minimum amount of processes necessary
to create a certain number of characters.
There is only one function
to copy everything and one to paste.
'''


def minOperations(n):
    k = 0

    if n <= 1:
        return k

    for i in range(2, n + 1):
        while (0 == n % i):
            k = k + i
            n = n / i
            if n < i:
                break
    return k
