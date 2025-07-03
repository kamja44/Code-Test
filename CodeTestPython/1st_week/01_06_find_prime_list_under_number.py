input = 20


# 소수는 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수이다. => 소수는 자기 자신과 1 외에는 아무것도 나눌 수 없다.
# N의 제곱근보다 크지 않은 어떤 소수로도 나누어 떨어지지 않는다.
# 즉, 2부터 n-1까지 어떤 수로도 나누어 떨어지지 않아야 한다.

# 소수는 1보다 큰 자연수 중 1과 자기 자신을 약수로 가지는 수

def find_prime_list_under_number(number):
    prime_list = []
    for n in range(2, number+1):
        print(n)
        for i in prime_list: # 소수만 비교해도 됨 range(2, n) => prime_list로 변경
            # 더 줄 일 수 있음 => 소수를 비교할 때 i * i가 n보다 작거나 같을때만 비교를함
            if i * i <= n and n % i == 0:
                break
        else:
            prime_list.append(n)
    return prime_list


result = find_prime_list_under_number(input)
print(result)