import heapq

ramen_stock = 4
supply_dates = [4, 10, 15]
supply_supplies = [20, 5, 10]
supply_recover_k = 30

# 1. 현재 재고의 상태에 따라 최고값을 받아야 한다.
# 2. 제일 많은 값만 가져가면 된다. => maxHeap

# heap 에다가 넣어둔 다음에 최고로 많은 재고들을 꺼내서 stock에 추가해주면 될 것
# 현재 재고가 바닥나는 시점 이전까지
def get_minimum_count_of_overseas_supply(stock, dates, supplies, k):
    answer = 0 # 최소한의 숫자
    last_added_date_index = 0 # 마지막으로 재고를 추가한 인덱스 저장
    max_head = []
    while stock <= k: # stock이 k보다 크게 되면 멈출 것이다.
    return


print(get_minimum_count_of_overseas_supply(ramen_stock, supply_dates, supply_supplies, supply_recover_k))
print("정답 = 2 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(4, [4, 10, 15], [20, 5, 10], 30))
print("정답 = 4 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(4, [4, 10, 15, 20], [20, 5, 10, 5], 40))
print("정답 = 1 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(2, [1, 10], [10, 100], 11))