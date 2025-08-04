def is_correct_parenthesis(string):
    stack = []
    for ch in string:
        if ch == '(':
            stack.append(ch)
        else:
            if len(stack) == 0:
                return False
            stack.pop()

    if len(stack) == 0:
        return True
    else:
        return False


print("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis("(())"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis(")"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())))"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("())()"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())"))