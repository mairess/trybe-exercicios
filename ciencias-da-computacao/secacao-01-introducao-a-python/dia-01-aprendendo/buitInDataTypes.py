print(3 == 3)

print(3 == 2)


a = 5

type(a)

a = 5.2

type(a)

a = "hello my friend"

type(a)


great_chess_players = ["Magnus Carlsen", "Fabiano Caruana"]

great_chess_players[1]

great_chess_players[0]

great_chess_players.append("Maires")

great_chess_players

great_chess_players.remove("Maires")

more_chase_players = ["Hikaru Nakamura", "Viswanathan Anand", "Alireza Firouzja"]

great_chess_players.extend(more_chase_players)

("Magnus Carlsen", 1)

world_champion = ("Magnus Carlsen", 1)

world_champion[1]

great_chess_players_ranking = [world_champion]


great_chess_players_ranking.append(("Fabiano Caruana", 2))


great_chess_players_ranking.extend(
    [
        (great_chess_players[2], 18),
        (great_chess_players[3], 15),
        (great_chess_players[4], 21),
    ]
)
great_chess_players_ranking

player = {"name": "Alberto", "city": "Belo Horizonte"}


player

player["name"]

player = ("Alberto", "Belo Horizonte")

player[0]

admin_user = {"Alberto", "Gabi"}

data_squad = {"Gabi", "Nakano", "Lucca"}

admin_user.intersection(data_squad)

all_users = {"Alberto", "Leticia Bora", "Lucca", "Nakano", "Matheus Goyas"}

standard_access_users = all_users.difference(admin_user)

admin_user = admin_user.union(standard_access_users)

admin_user


trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciências da Computação")

trybe_course[0] = "Fundamentos"

trybe_course

user = ("Will", "Marcones", 42)

user[0]

permissions = {"member", "group"}

permissions.add("root")

permissions.add("member")

permissions.remove("user")

permissions.union({"user"})

permissions.intersection({"user", "member"})

permissions.difference({"user"})

permissions


var = set()

var.add("Maires")

var.add("Jorge")

var

people_by_id = {1: "Maria", 2: "Fernando", 3: "Felipe"}

people_by_name = {"Maria": 1, "Fernando": 2, "Filipe": 2}

people_by_name["Maria"]

people_by_id[1]

del people_by_id[1]

people_by_id.items()

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"

del info["origem"]

info

list(range(5))

list(range(1, 11, 2))

list(range(10, 0, -1))


my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if (item in freq_dict):
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# Saída
20: 2
1: 1
2: 1