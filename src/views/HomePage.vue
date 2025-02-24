<template>
    <h1>home page</h1>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { fetchPopularMovie } from '@/services/tmdbAPI';

    const movies = ref([]);

    onMounted(async () => {
        try {
            movies.value = await fetchPopularMovie();
            console.log(movies);
            
        } catch (error) {
            console.error("Cant fetch movies: ", error)
        }
    })
</script>