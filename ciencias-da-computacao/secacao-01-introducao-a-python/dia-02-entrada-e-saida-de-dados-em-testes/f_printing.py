genero = input("Qual gênero de filme você mais gosta de assistir? ")
ano = input("De que ano é seu filme favorito? ")
orcamento = float(input("Qual o orçamento gasto no filme? "))
nota = float(input("Qual a sua nota da crítica para esse filme? "))

string = ""

string += f"Gênero: {genero}\n"
string += f"Ano: {ano}\n"
string += f"Orçamento: {orcamento:.0f}\n"
string += f"Nota: {nota:.2f}\n"

print(string)
