# Initializes the stack
from collections import Counter, deque


stack = [1]
# Pushing 5 into the stack
stack.append(5)
# Look at the top item of the stack and print it
print(stack[-1])
# Removing the top item from the stack
stack.pop()


queue = deque()
queue.append(2)
queue.appendleft(4)
print(queue[-1])
print(queue[0])
queue.popleft()
print(queue)

l = []
l.append(1)
l.append(2)
print(l[-1])

set = set()
set.add('a')
set.add('a')
set.remove('a')
print(set)