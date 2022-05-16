from typing import List

def mergeSort(unsorted_list: List[int]) -> List[int]:
    if len(unsorted_list) == 1:
        return unsorted_list

    mid = len(unsorted_list) // 2
    left = unsorted_list[:mid]
    right = unsorted_list[mid:]

    def merge(left: List[int], right: List[int]):
        res = []
        while left and right:
            if left[0] > right[0]:
                res.append(right.pop())
            else:
                res.append(left.pop())
        return list(set(res).union(left).union(right))

    return merge(mergeSort(left), mergeSort(right))


l = [5, 3, 1, 2, 4]
res = mergeSort(l)
print(res)
