# a, b = "cd"
# print(a)
# print(b)


# head, *tail = (1, 2, 3)
# print(head)
# print(tail)


# characters_file = open("my-favorite-characters.txt", mode="w")

# characters_file.write("Uncle Patinhas\n")
# characters_file.write("Neo\n")
# characters_file.write("spider Man\n")

# print("Batman", file=characters_file)

# more_characters = ["Dream\n", "Ash Ketchum\n"]

# characters_file.writelines(more_characters)

# characters_file.close()

with open("file.txt", mode="w") as file:
    file.write("João 41\n")
    file.write("Pedro 27\n")
    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)

with open("file.txt", mode="r") as file:
    for line in file:
        print(line)
