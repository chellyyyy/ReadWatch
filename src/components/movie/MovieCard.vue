<template>
    <div class="movie-card" :style="{ width: cardWidth, height: cardHeight }">
        <router-link :to="`/movie/${movie.id}`">
            <img :src="getImageUrl(movie.poster_path, size)" alt="" class="poster">
        </router-link>
    </div>

    <div class="movie-info">
        <h3>{{ movieTitle }}</h3>
        <p v-if="category === 'popular'">{{ movie.vote_average.toFixed(1) }}</p>
        <p v-else-if="category === 'new'">{{ formatDate(movie.release_date) }}</p>
        <p v-else-if="category === 'trending'">{{ movie.popularity }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    movie: Object,
    category: String,
    size: String
})

const movieTitle = computed(() => {
    return props.movie.title.length > 20 ? props.movie.title.substring(0, 17) + '...' : props.movie.title;
})

const getImageUrl = (path, size) => {
    const sizes = {
        small: "w185",
        medium: "w342",
        large: "w500"
    }
    
    return `https://image.tmdb.org/t/p/${sizes[size] || "w342"}/${path}`;
}

// Format date
const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
}

const cardWidth = computed(() => {
    return props.size === "small" ? "120px" : props.size === "large" ? "250px" : "180px";
})

const cardHeight = computed(() => {
    return props.size === "small" ? "180px" : props.size === "large" ? "375px" : "270px";
})

</script>

<style lang="scss" scoped>
.movie-card {
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.movie-card:hover {
    transform: scale(1.05);
}

.poster {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
}

.movie-info {
    display: none;

    padding: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: vars.$font-color-primary;
    font-size: 14px;
}
</style>
