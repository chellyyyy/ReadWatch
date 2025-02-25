<template>
    <div class="movie-grid">
        <MovieCard 
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
            :category="category"
            :size="size"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import MovieCard from './MovieCard.vue';

defineProps({
    movies: Array,
    category: String,
    size: String
})
</script>

<style lang="scss" scoped>
.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
}
</style>