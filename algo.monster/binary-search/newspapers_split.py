from typing import List


def newspapers_split(newspapers: List[int], coworkers: int) -> int:
    low, high = max(newspapers), sum(newspapers)

    def feasible(val):
        total, read_time = 0, 1
        for num in newspapers:
            total += num
            if total > val:
                read_time += 1
                total = num

        return read_time <= coworkers

    boundary_index = high
    while low <= high:
        mid = (low+high)//2
        if feasible(mid):
            boundary_index = mid
            high = mid - 1
        else:
            low = mid + 1
    return boundary_index


# newspapers = [2,3,5,7]
# coworkers = 3
newspapers = [7, 2, 5, 10, 8] # 10 ... 32 -> find minium time with desired worker
coworkers = 2
res = newspapers_split(newspapers, coworkers)
print(res)

## different approach 
def feasible(newspapers: List[int], coworkers: int, val: int) -> bool:
    # sum to keep track of current time for the current coworker, split to keep track of the number of coworkers used thus far
    total, split = 0, 0
    for num in newspapers:
        # if one newspaper time exceeds that of our selected time then it is impossible to fulfill the time requirement we set
        if num > val:
            return False
        # check if current sum is greater than our desired time
        if total + num > val:
            total = 0
            split += 1
        total += num
    # edge case to check if we needed an extra coworker at the end
    if total != 0:
        split += 1
    # check if the number of coworkers we used is less than the desired amount
    return split <= coworkers

def newspapers_split(newspapers: List[int], coworkers: int) -> int:
    low, high = 0, 1000000001
    while low <= high:
        mid = (low + high) // 2
        # helper function to check if a time works
        if feasible(newspapers, coworkers, mid):
            high = mid - 1
        else:
            low = mid + 1
    return high + 1