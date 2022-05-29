from typing import List


def selectionSort(unsorted_list: List[int]) -> List[int]:
    for i in range(len(unsorted_list)):
        min_idx = i
        for j in range(i, len(unsorted_list)):
            if unsorted_list[j] < unsorted_list[min_idx]:
                min_idx = j
        unsorted_list[min_idx], unsorted_list[i] = unsorted_list[i], unsorted_list[min_idx]
    return unsorted_list


l = [5, 3, 1, 2, 4]
res = selectionSort(l)
print(res)
