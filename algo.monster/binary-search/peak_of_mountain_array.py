from typing import List

def peak_of_mountain_array(arr: List[int]) -> int:
    # WRITE YOUR BRILLIANT CODE HERE
    # 0 10 3 2 1 0
    # 0 1 2 3 2 1 0
    l, r = 0, len(arr)-1
    boundary_index = - 1
    while l <= r:
        mid = (l+r)//2
        if arr[mid] > arr[mid+1]:
            boundary_index = mid
            r = mid - 1
        else:
            l = mid + 1
    return boundary_index

    # max = len(arr)//2
    # for item in range(len(arr)):
    #   if arr[item] > arr[max]:
    #     max = item
    # return max
# arr = [0,10 ,3 ,2 ,1 ,0]
arr = [0, 1, 2, 3, 2, 1, 0]
res = peak_of_mountain_array(arr)
print(res)
