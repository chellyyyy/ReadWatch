<template>
    <div class="movie-colle" :style="{ gap: props.flexGap }">
        <div class="movie-item"
            v-for="movie in preprocessData"
            :style="{ width: cardWidth,
                     height: cardHeight, 
                     'margin-left': isStack ? '-' + stackGap : 0
                    }"
            :key="movie.id"
        >
            <img :src="getImageUrl(movie.poster_path, size)" alt="">
        </div>
    </div>
</template>

<script setup>

import { getImageUrl } from '../common/utils.js'
import { computed } from 'vue';

const props = defineProps({
    movies: Object,
    movieNum: {type: String, default: '5'},
    size: String,
    isStack: {type: Boolean, default: false},
    stackGap: {type: String, default: '0'},
    colleWidth: {type: String, default: '200px'},
    flexGap: {type: String, default: '10px'}
})

const preprocessData = computed(()=> {
    return props.movies.slice(0, props.movieNum);
})

const cardWidth = computed(() => {
    return props.size === "small" ? "76px" : props.size === "large" ? "156px" : "92px";
})

const cardHeight = computed(() => {
    return props.size === "small" ? "111px" : props.size === "large" ? "231px" : "135px";
})

</script>

<style lang="scss" scoped>
.movie-colle {
    @include flex-row;
    position: relative;
    justify-content: center;
    width: 100%;
    height: auto;
}

.movie-item {
    overflow: hidden;
    border-radius: 5px;
    
    img {
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
}

.movie-item:nth-child(1) {
    margin-left: 0 !important;
}

</style>
