# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

# Exemplo de subordinados:
# - 1 => 2, 3

# - 2 => 4

# - 3 => sem subordinados

# - 4 => 5, 6

# - 5 => 7

# - 6 => sem subordinados

# - 7 => sem subordinados

# Neste exemplo, o score de cada pessoa é:

# - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

# - 2 => 4 (score 4) + 1 (score dele próprio) = 5

# - 3 => 1 (score dele próprio)

# - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

# - 5 => 1 (score 7) + 1 (score dele próprio) = 2

# - 6 => 1 (score dele próprio)

# - 7 => 1 (score dele próprio)


def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    print(score(subordinates, 1))
    print(score(subordinates, 2))
    print(score(subordinates, 3))
    print(score(subordinates, 4))
    print(score(subordinates, 5))
    print(score(subordinates, 6))
    print(score(subordinates, 7))


class Hierarchy:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}

    def get_score(self, person):
        if person in self.scores:
            print("Já calculei esse score antes")
            return self.scores[person]

        this_score = 1

        for subordinate in self.subordinates[person]:
            this_score += self.get_score(subordinate)
        self.scores[person] = this_score

        return this_score


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    hierarchy = Hierarchy(subordinates)

    print(hierarchy.get_score(1))
    print(hierarchy.get_score(2))
    print(hierarchy.get_score(3))
    print(hierarchy.get_score(4))
    print(hierarchy.get_score(5))
    print(hierarchy.get_score(6))
    print(hierarchy.get_score(7))
