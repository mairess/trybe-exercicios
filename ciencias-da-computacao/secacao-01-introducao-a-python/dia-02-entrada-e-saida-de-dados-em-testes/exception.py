# Para fixar

# Exercício 3:


# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

# Arquivo:

# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

# Exemplo saída:

# Copiar
# Felipe
# Miguel

# 🦜 A função split pode ser utilizada para dividir o nome em uma linha. Ex: line.split() -> ["Marcos", "10"].

try:
    failed_students = []
    with open("students.txt", mode="r") as file:
        students = list(file)
    with open("approved.txt", mode="w") as approved_file:
        for student in students:
            grade = float(student.split(" ")[1])
            if grade >= 6:
                approved_file.write(student + "\n")
            else:
                failed_students.append(student + "\n")
    with open("students.txt", mode="w") as file:
        for student in failed_students:
            file.write(student + "\n")
except FileNotFoundError:
    print("File not found my friend!")
else:
    with open("students.txt", mode="r") as reproved_students_file:
        for student in reproved_students_file:
            print(student.split(" ")[0])
    print("File manipulated and closed successfully")
finally:
    print("End of reading file try!")
