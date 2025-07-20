numbers = [1, 1, 1, 1, 1]
target_number = 3

def get_count_of_ways_to_target_by_doing_plus_or_minus(array, target):
    all_ways = []

    def get_all_ways_by_doing_plus_or_minus(array, current_index, current_sum):
        if current_index == len(array):
            all_ways.append(current_sum)
            return

        print('current index', current_index, 'current sum',current_sum)

        get_all_ways_by_doing_plus_or_minus(array, current_index + 1, current_sum + array[current_index])
        get_all_ways_by_doing_plus_or_minus(array, current_index + 1, current_sum - array[current_index])

    get_all_ways_by_doing_plus_or_minus(array, 0, 0)

    print('all ways', all_ways)
    target_count = 0
    for num in all_ways:
        if num == target:
            target_count += 1

    return target_count







print(get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number))  # 5를 반환해야 합니다!
