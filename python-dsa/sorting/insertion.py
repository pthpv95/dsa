from typing import List


def sort_list(unsorted_list: List[int]) -> List[int]:
    for i, entry in enumerate(unsorted_list):
        current = i
        while current > 0 and unsorted_list[current] < unsorted_list[current - 1]:
            unsorted_list[current], unsorted_list[current - 1] = unsorted_list[current-1], unsorted_list[current]
            current = current - 1

    return unsorted_list


l = [5, 3, 1, 2, 4]
res = sort_list(l)
print(res)
