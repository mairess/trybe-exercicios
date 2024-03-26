# while True:
#     try:
#         x = int(input("Please type an integer: "))
#         break
#     except ValueError:
#         print("Ops! This is not an integer. Try again...")

try:
    with open("new_file.txt", mode="r") as file:
        print(file.read())
except FileNotFoundError:
    print("File not found!")
else:
    print("File manipulated and closed successfully")
finally:
    print("End of reading file try!")