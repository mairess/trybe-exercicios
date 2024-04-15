from collections import ChainMap
from collections import OrderedDict
from collections import defaultdict


team = ChainMap({"name": "Michael"}, {"age": 28}, {"role": "instructor"})

print(team)
print(team["name"])
print(team["age"])
print(team["role"])


ordered = OrderedDict()
ordered["name"] = "Michael"
ordered["age"] = 28
ordered["role"] = "instructor"

print(ordered.keys())


default = defaultdict(list)
default["team"].append("Flávio")
default["team"].append("Michael Felps")
default["team"].append("Carlos")
default["team"].append("Roni")

default["instructor"].append("Jose")

print(default["team"], default["instructor"])
