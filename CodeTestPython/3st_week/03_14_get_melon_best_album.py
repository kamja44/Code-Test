def get_melon_best_album(genre_array, play_array):
    # 1. dict에 장르별로 얼마나 재생횟수를 가지고 있는가
    # 2. dict에 장르별로 어느 인덱스에 몇번 재생횟수를 가지고 있는가

    n = len(genre_array)
    genre_total_play_dict = {}
    genre_index_play_array_dict = {}

    for i in range(n):
        genre = genre_array[i]
        play = play_array[i]

        if genre in genre_total_play_dict: # 키가 기존에 존재하는 상황
            genre_total_play_dict[genre] += play
            genre_index_play_array_dict[genre].append([i, play])

        else: # 키가 기존에 존재하지 않는 상황 => 즉, 처음 할당하는 경우
            genre_total_play_dict[genre] = play
            genre_index_play_array_dict[genre] = [[i, play]]

    # 장르별로 가장 재생횟수가 많은 장르들 중, 곡수가 많은 순서대로 2개씩 출력하기
    print(genre_total_play_dict.items())

    sorted_genre_play_array = sorted(genre_total_play_dict.items(), key=lambda item: item[1], reverse=True)
    result = []
    for genre, total_play in sorted_genre_play_array:

        sorted_genre_index_play_array = sorted(genre_index_play_array_dict[genre], key=lambda item: item[1], reverse=True)

        # 장르별로 재생수 높은 2곡까지만 반환
        genre_song_count = 0
        for index, play in sorted_genre_index_play_array:
            if genre_song_count < 2:
                print("index ", index, "play ", play)
                result.append(index)
                genre_song_count += 1

    return result


print("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ", get_melon_best_album(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))
print("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ", get_melon_best_album(["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"], [2000, 500, 600, 150, 800, 2500, 2000]))