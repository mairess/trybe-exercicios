def get_most_frequent(numbers: list[int]) -> int:
    count = {}
    most_frequent = numbers[0]

    for num in numbers:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

        if count[num] > most_frequent:
            most_frequent = count[num]

    return most_frequent


# text = ["Ana", "ama", "Joao", "que", "ama", "Jose", "mais", "Jose", "nao", "ama", "Ana"]

# resposta:
# a: ["Ana", "ama", "ama", "Ana"]
# j: ["Joao", "Jose", "Jose"]
# q: ["que"]
# m: ["mas"]
# n: ["nao"]


def separate_words(text: list[str]):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)

    return screen


# listA = [1, 2, 3, 4, 5, 6]
# listB = [4, 5, 6, 7, 8, 9]

# answer = [4, 5, 6]


def get_intersection(numbers_one: list[int], numbers_two: list[int]) -> list[int]:
    intersection = []

    for number in numbers_one:
        if number in numbers_two:
            intersection.append(number)

    return intersection


def intersection(listA: list[int], listB: list[int]) -> list[int]:
    seen_in_a = {}

    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    ans = []
    for item in listB:
        if item in seen_in_a:
            ans.append(item)

    return ans
