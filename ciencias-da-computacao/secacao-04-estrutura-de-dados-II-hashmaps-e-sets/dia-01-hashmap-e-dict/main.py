from playground import get_most_frequent
from playground import separate_words

nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]

print(get_most_frequent(nums))


text = ["Ana", "ama", "Joao", "que", "ama", "Jose", "mais", "Jose", "nao", "ama", "Ana"]

# resposta:
# a: ["Ana", "ama", "ama", "Ana"]
# j: ["Joao", "Jose", "Jose"]
# q: ["que"]
# m: ["mas"]
# n: ["nao"]

for key, value in separate_words(text).items():
    print(f"{key}: {value}")
