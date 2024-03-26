import json


# with open("pokemons.json") as pokemons_file:
#     content = pokemons_file.read()
#     pokemons = json.loads(content)["results"]

# print(pokemons[0])


with open("pokemons.json") as pokemons_file:
    pokemons = json.load(pokemons_file)["results"]

grass_type_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)

# with open("grass_type_pokemons.json", "w") as file:
#     json_to_write = json.dumps(
#         grass_type_pokemons
#     )
#     file.write(json_to_write)

with open("grass_type_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file, indent=2)

print(pokemons[0])
