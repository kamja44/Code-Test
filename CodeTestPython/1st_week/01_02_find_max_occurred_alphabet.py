def find_max_occurred_alphabet(string):
    alphabet_occurence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord('a')
        alphabet_occurence_array[arr_index] += 1

    # print('alphabet_occurence_array', alphabet_occurence_array)

    max_occurence = 0
    max_alphabet_index = 0

    for index in range(len(alphabet_occurence_array)): # 이렇게 해야 0 ~ 25까지 순회 기존 array 그대로 박으면 index에 값 들어감
        # print(index, 'index')
        alphabet_occurence = alphabet_occurence_array[index]

        if(alphabet_occurence > max_occurence):
            max_occurence = alphabet_occurence
            max_alphabet_index = index

    # print("max_alphabet_index", max_alphabet_index)
    # print("max_occurence", max_occurence)
    # 아스키코드를 index로 다시 변환

    return chr(max_alphabet_index + ord('a'))

# 1. a, b, c 처럼 문자가 해당 문자열에 얼마나 있는지 파악한 후, 그 개수가 가장 크다면 반환해줘야 한느 값을 그 알파벳으로 반환한다.

# 2. [0] * 26 각 알파벳의 빈도수를 저장한 배열을 만ㄷ느다.
# 그리고 문자열을 돌면서 해당 문자가 알파벳이라면, 알파벳을 인덱스화 시켜서 알파벳의 빈도수를 업데이트한다.

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

print("정답 = [1, 0, 2, 2, 2, 0, 2, 1, 3, 0, 0, 2, 2, 3, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] \n현재 풀이 값 =",
      find_alphabet_occurrence_array("hello my name is dingcodingco"))
print("정답 = [1, 0, 0, 0, 2, 0, 1, 1, 1, 0, 0, 2, 1, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0] \n현재 풀이 값 =",
      find_alphabet_occurrence_array("we love algorithm"))
print("정답 = [0, 3, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 3, 2, 0, 0, 0, 1, 0] \n현재 풀이 값 =",
      find_alphabet_occurrence_array("best of best youtube"))

result = find_max_occurred_alphabet
print("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", result("we love algorithm"))
print("정답 = b 현재 풀이 값 =", result("best of best youtube"))