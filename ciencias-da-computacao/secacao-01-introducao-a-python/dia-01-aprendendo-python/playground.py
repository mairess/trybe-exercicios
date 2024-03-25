from unicodedata import normalize
from unidecode import unidecode

source = "vós arrepiáveis paçoca"

print(normalize("NFKD", source))

print(unidecode(source)).encode("ASCII", "ignore").decode("ASCII")


phrase = "CS é bom demais, as dicas pythonicas fazem ficar melhor ainda"

vowels = "aeiou"

lista_v = []

lista_c = []

lista_vogais = [letra for letra in phrase if letra.lower() in vowels]

print(lista_vogais)


for char in phrase:
    if char in vowels:
        lista_v.append(char)


for char in phrase:
    if char not in vowels:
        lista_c.append(char)


print(lista_v)

print(lista_c)


# pythonic way
# comprehension


# list
list_of_vowels = [char for char in phrase if char in vowels]

print(list_of_vowels)


list_of_consonants = [char for char in phrase if char not in vowels]

print(list_of_consonants)


# set
set_vowels = {char for char in phrase if char in vowels}

print(set_vowels)
