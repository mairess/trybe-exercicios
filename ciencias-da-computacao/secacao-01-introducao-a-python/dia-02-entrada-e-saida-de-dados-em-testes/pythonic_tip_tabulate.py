# from tabulate import tabulate


# titles = ["Anime", "Season"]

# data = [
#     ["Digimom (2020)", 1],
#     ["The Promised Neverland", 1],
#     ["Attack on Titan", 4],
#     ["Jujustsu Kaisen", 1]
# ]

# print(tabulate(data, headers=titles, tablefmt="fancy_grid"))


from tabulate import tabulate


titles = ["Anime", "Season"]

data = [
    ["Digimom (2020)", 1],
    ["The Promised Neverland", 1],
    ["Attack on Titan", 4],
    ["Jujustsu Kaisen", 1]
]

print(tabulate(data, headers=titles, tablefmt="fancy_grid", numalign="center", stralign="right"))
