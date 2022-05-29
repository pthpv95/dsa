from typing import List


def min_max_weight(weights: List[int], d: int) -> int:
    def feasible(max_weight: int) -> bool:
        req_days = 1
        capacity = 0
        for weight in weights:
            capacity += weight
            if capacity > max_weight:
                req_days += 1
                capacity = weight
        return req_days <= d

    left = max(weights)
    right = sum(weights)
    boundary_index = right

    while left <= right:
        mid = (left + right) // 2
        if feasible(mid):
            boundary_index = mid
            right = mid - 1
        else:
            left = mid + 1

    return boundary_index


def shipWithinDays(weights, D):
    left, right = max(weights), sum(weights)
    while left < right:
        mid, need, cur = (left + right) // 2, 1, 0
        for w in weights:
            if cur + w > mid:
                need += 1
                cur = 0
            cur += w
        if need > D:
            left = mid + 1
        else:
            right = mid
    return left


# weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# d = 5
weights = [1, 2, 3, 1, 1]
d = 4
res = min_max_weight(weights, d)
# res2 = shipWithinDays(weights, d)
print(res)
