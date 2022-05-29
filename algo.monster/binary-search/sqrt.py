
def square_root(n: int) -> int:
    if n == 0:
        return 0
    left, right = 1, n
    res = -1
    while left <= right:
        mid = (left + right) // 2
        if mid * mid <= n:
            res = mid
            left = mid + 1
        else:
            right = mid - 1
    return res


#9
# [1,2,3,4,5,6,7,8,9]
# //
n = 4
res = square_root(n)
print(res)
