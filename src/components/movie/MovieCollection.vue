<template>
    <div class="movie-colle">
        <div class="movie-item" :style="{ width: cardWidth, height: cardHeight }">
            <img :src="getImageUrl(movie.poster_path, size)" alt="">
        </div>
    </div>
</template>

<script setup>

import { getImageUrl } from '../common/utils.js'
import { onMounted, computed } from 'vue';

const props = defineProps({
    movie: Object,
    size: {type: String, default: "medium"},
    isStack: {type: Boolean, default: false},
    stackGap: {type: String, default: '20px'},
    colleWidth: {type: String, default: '200px'}

})

const cardWidth = computed(() => {
    return props.size === "small" ? "76px" : props.size === "large" ? "156px" : "92px";
})

const cardHeight = computed(() => {
    return props.size === "small" ? "111px" : props.size === "large" ? "231px" : "135px";
})



</script>

<style lang="scss" scoped>

</style>