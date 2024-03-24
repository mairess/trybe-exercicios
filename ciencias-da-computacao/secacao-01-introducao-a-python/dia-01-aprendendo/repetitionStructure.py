from random import randint


pantheon_of_arton = [
    {"name": "Wynna", "domain": "Spell"},
    {"name": "Nimb", "domain": "Luck"},
    {"name": "Ahadaral", "domain": "Torment"},
]


dice_roll = randint(1, 20)

if dice_roll == 1:
    print("Vixi... Deu Ruim!")
elif 2 <= dice_roll <= 15:
    print("Ahadarak, por que me atormentas?!")
else:
    print("Agora ninguém me segura!")

dice_roll

domains = []

for god in pantheon_of_arton:
    domains.append(god["domain"])

domains

domains = [god for god in pantheon_of_arton if god["domain"] != "Torment"]

domainsSecond = [
    god["domain"] for god in pantheon_of_arton if god["domain"] != "Torment"
]

domainsSecond


restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0

for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


for index in range(1, 5):
    print(index)

numbers = range(1, 6)
list(numbers)


n = 152342234234234234340
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next


languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

languages = ["Python", "Java", "JavaScript"]

for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")

# Saída:
# 0 - Python
# 1 - Java

fatorialOfFive = 1

for number in range(1, 6):
    fatorialOfFive *= number

fatorialOfFive


ratings = [6, 8, 5, 9, 10]

ratingsUpdated = [rate * 10 for rate in ratings]

ratingsUpdated

for rate in ratings:
    if rate % 3 == 0:
        print(f"{rate} é múltiplo de 3")
