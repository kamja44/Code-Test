shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두", "순대"]

# 방법 1
def is_available_to_order(menus, orders):
    menus.sort()
    orders.sort()
    print('menus', menus)
    print('orders', orders)
    for order in orders:
        if order not in menus:
            return False
    return True

# 방법 2
def is_available_to_order_2(menus, orders):
    menus.sort()
    for order in orders:
        if not is_existing_target_number_binary(order, menus):
            return False
    return True

# 이진탐색
def is_existing_target_number_binary(target, array):
    current_min = 0
    current_max = len(array) - 1
    current_guess = (current_min + current_max) // 2

    while current_min <= current_max:
        if array[current_guess] == target:
            return True
        elif array[current_guess] < target:
            current_min = current_guess + 1
        else:
            current_max = current_guess - 1
        current_guess = (current_min + current_max) // 2

    return False


result = is_available_to_order(shop_menus, shop_orders)
result2 = is_available_to_order_2(shop_menus, shop_orders)
print(result)
print(result2)