from stack import Stack


my_stack = Stack()


def solve_expression(expr: str):
    stack = Stack()

    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            stack.push(int(token))

    return stack.pop()


# print(my_stack.is_empty())
print(solve_expression("10 5 + 3 *"))
# print(my_stack.is_empty())
