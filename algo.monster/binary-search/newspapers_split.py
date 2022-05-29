from typing import List


def newspapers_split(newspapers: List[int], coworkers: int) -> int:
    low, high = max(newspapers), sum(newspapers)

    def feasible(val):
        total, split = 0, 0
        for num in newspapers:
            if num > val:
                return False
            if total + num > val:
                split += 1
                total = 0
            total += num

        if total != 0:
            split += 1
        return split <= coworkers

    while low <= high:
        mid = (low+high)//2
        if feasible(mid):
            high = mid - 1
        else:
            low = mid + 1
    return high + 1


# newspapers = [2,3,5,7]
# coworkers = 3
newspapers = [7, 2, 5, 10, 8] # 10 ... 32 -> find minium time with desired worker
coworkers = 2
res = newspapers_split(newspapers, coworkers)
print(res)
