def get_more_occurrent(numbers: list[int]):
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
