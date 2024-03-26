# Exercício 2:
# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".

import random

words = ["cachorro", "gato", "bicicleta", "aventura", "sorvete"]

scrambled_words = []

for word in words:
    word = "".join(random.sample(word, len(word)))
    scrambled_words.append(word)

drawn = random.choice(words)
scrambled = "".join(random.sample(drawn, len(drawn)))

number_of_chances = 3
while number_of_chances > 0:
    user_choice = input(f"Guess this word -> '{scrambled}' ")
    number_of_chances -= 1
    if user_choice == drawn:
        print("Congratulations! You got it right!")
        break
else:
    if user_choice != drawn:
        print(f"Nice try but you didn't get it. The word is '{drawn}'.")
