input = "abadabac"

def find_not_repeating_first_character(string):
    # 이 부분을 채워보세요!
    occurrence_array = find_alphabet_occurrence_array_1(string)

    not_repeating_character_array = []
    for index in range(len(occurrence_array)):
        alphabet_occurrence = occurrence_array[index]
        if alphabet_occurrence == 1:
            not_repeating_character_array.append(chr(alphabet_occurrence + ord('a')))
    # 여기까지 하면 한번만 들어간 리스트들 구했음
    for char in string:
        # 입력된 배열을 순회하면서
        if char in not_repeating_character_array:
            # 한번만 들어간 리스트들에 들어가있는지 확인
            return char # 맨처음으로 중복되지 않은것 반환 => 나중에 스택으로 해도 될듯??

    # occurrence_array = find_alphabet_occurrence_array(string)
    #
    # not_repeating_character_array = []
    # for index in range(len(occurrence_array)):
    #     alphabet_occurrence = occurrence_array[index]
    #     if alphabet_occurrence == 1:
    #         not_repeating_character_array.append(chr(index + ord('a')))
    #
    # print(not_repeating_character_array)
    # for char in string:
    #     if char in not_repeating_character_array:
    #         return char

    return "_"

def find_alphabet_occurrence_array_1(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if(not char.isalpha()):
            continue

        alphabet_index = ord(char) - ord('a')
        alphabet_occurrence_array[alphabet_index] += 1

    return alphabet_occurrence_array

def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        # 알파벳이 아닐 떄
        if(char.isalpha() == False):
            continue
        # 알파벳일 때
        alphabet_index = ord(char) - ord('a')
        alphabet_occurrence_array[alphabet_index] += 1


    return alphabet_occurrence_array


result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))