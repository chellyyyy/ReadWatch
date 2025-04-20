<template>
    <div class="list-preview-component">
        <div
            class="stack-wrapper"
            v-for="(list, index) in lists.slice(0, 3)"
            :key="index"
        >
            <div class="poster-stack">
                <img
                    v-for="(poster, idx) in list.posters"
                    :key="idx"
                    :src="poster"
                    class="poster"
                    :style="{ zIndex: list.posters.length - idx }"
                />
            </div>
            <div class="list-name">{{ list.list_name }}</div>
            <div class="user-action">
                <img :src="list.avt_url" alt="" class="user-icon">
                <a class="list-user-name" href="/">{{ list.user_name }}</a>

                <img src="https://img.icons8.com/material-rounded/24/737373/like--v1.png" alt="" class="list-react-icon">
                <span class="list-react-count">{{ list.like }}</span>

                <img src="" alt="" class="cmt-icon">
                <span class="cmt-count"></span>
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
import { ref, onMounted } from 'vue';
import { getImageUrl, getMovieDetail } from '../common/utils';
import { getLists } from '@/services/listAPI';

const lists = ref([]);

// Use getMovieDetail to get detail → get poster_path → use getImageUrl to get full url
const fetchMoviePoster = async (movieId) => {
    try {
        const movie = await getMovieDetail(movieId);
        return movie?.poster_path ? getImageUrl(movie.poster_path, 'small') : null;
    } catch (err) {
        console.error(`Failed to get movie ${movieId}:`, err);
        return null;
    }
};

onMounted(async () => {
    try {
        const data = await getLists();

        const enriched = await Promise.all(
            data.map(async (list) => {
                const posters = await Promise.all(
                    list.movie_ids.slice(0, 5).map(fetchMoviePoster)
                );
                return { ...list, posters: posters.filter(Boolean) };
            })
        );

        lists.value = enriched;

        console.log("LIST: ", lists.value);
        
    } catch (err) {
        console.error('Failed to load lists:', err);
    }
});
</script>

<style scoped lang="scss">
.list-preview-component {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.stack-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 236px;
    margin-top: 10px
}

.poster-stack {
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 236px;
    height: 111px;
    border: 3px solid transparent;
    border-radius: 3px;
    transition: border 0.3s ease;
}

.stack-wrapper:hover .poster-stack {
    border: 3px solid vars.$rating-color;
    border-radius: 3px;
}

.poster-stack .poster {
    position: relative;
}

.poster {
    width: 76px;
    height: 111px;
    border-radius: 3px;
    object-fit: cover;
    margin-left: -38px;
    transition: transform 0.3s ease, z-index 0.3s ease;
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.75);
    z-index: 0;
}

.poster:first-child {
    margin-left: 0;
}

.list-name {
    width: 235px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    color: vars.$font-color-primary;
    line-height: 1.3;
}

.user-action {
    width: 235px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
    font-size: 12px;
    color: vars.$font-grey;
    align-items: center;
    gap: 5px;

    .user-icon {
        @include avatar-size(24px);
    }

    .list-user-name {
        font-weight: bold;
        text-align: left;
    }

    a {
        color: vars.$font-grey;
    }

    .list-react-icon {
        margin-left: 5px;
        // transform: translateY(2px);
        width: 16px;
        height: 16px;
    }

    .list-react-count {
        font-weight: 300;
    }
}

</style>
  