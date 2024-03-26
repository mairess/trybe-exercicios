# Exercício 3:
# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.


import random

scrambled_words = []
original_words = []

with open("words.txt", mode="r") as file:
    words = [word.strip() for word in file.readlines()]

drawn = random.choice(words)
scrambled_word = "".join(random.sample(drawn, len(drawn)))

number_of_chances = 3
while number_of_chances > 0:
    user_choice = input(f"Guess this word -> '{scrambled_word}' ")
    number_of_chances -= 1
    if user_choice == drawn:
        print("Congratulations! You got it right!")
        break
else:
    if user_choice != drawn:
        print(f"Nice try but you didn't get it. The word is '{drawn}'.")
