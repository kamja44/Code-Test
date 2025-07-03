input = "011110"


def find_count_to_turn_out_to_all_zero_or_all_one(string):
    count_to_all_zero = 0
    count_to_all_one = 0

    # 맨 처음이 0일때는 0을 1로 뒤집는 걸 추가
    if string[0] == '0':
        count_to_all_one += 1
    # 맨 처음이 1일때는 1을 0으로 뒤집는 걸 추가
    if string[0] == '1':
        count_to_all_zero += 1

    for i in range(len(string) - 1): # 가장 뒤에서 앞에껄 비교할꺼기 때문에 앞에꺼만 가져오기 위해 -1을 함
        if string[i] != string[i+1]: # 이 조건 때문에 len(string) - 1인것임
            # 이 포인트가 뒤집어야 하는 포인트임 => 0인지, 1인지 체크
            if string[i] == '1':
                count_to_all_one += 1
            if string[i] == '0':
                count_to_all_zero += 1
    print(count_to_all_zero, count_to_all_one)

    # 이 부분을 채워보세요!
    return min(count_to_all_one, count_to_all_zero)


result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print(result)