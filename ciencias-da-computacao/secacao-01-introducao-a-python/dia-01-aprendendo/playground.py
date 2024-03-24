mutiplicacao = 2 * 3  # este é um comentário
soma = 2 + 3
divisao = 6 / 2
subtracao = 3 - 2

print(mutiplicacao + soma + divisao + subtracao)

counter = 0

#  counter++

counter += 1
counter
counter += 1
counter += 1
counter

temperature = 20

18 < temperature < 25

a = 151

b = 5

a + b

a - b

a / b

a // b

a * b

a**b

a % b


hours = 6

minutes = hours * 60

seconds = minutes * 60

print(f"{hours} hours has {minutes} minutes and {seconds} seconds")

print(f"{hours} hours \n has {minutes} minutes \n and {seconds} seconds")

print(
    f"""Did you know that {hours} hours
has {minutes} minutes
and {seconds} seconds"""
)

bookCover = 24.20

discountPercentage = 0.4

bookCoverWithDiscount = bookCover - (bookCover * discountPercentage)

shipmentFirstItem = 3

shipmenRestItems = 0.75

booksOrder = 60

shipmentCost = ((booksOrder - 1) * shipmenRestItems) + shipmentFirstItem

totalCost = shipmentCost + (booksOrder * bookCoverWithDiscount)

print(totalCost)
