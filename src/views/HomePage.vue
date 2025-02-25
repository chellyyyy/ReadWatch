<template>
    <div class="home">
        <HomeBanner :url="bannerUrl"/>
        <MovieGrid :movies="popularMovies" category="popular" size="small" />
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import MovieGrid from '@/components/movie/MovieGrid.vue';
    import HomeBanner from '@/components/movie/HomeBanner.vue';
    import { fetchMovie } from '@/services/tmdbAPI';

    const popularMovies = ref([]);
    const bannerUrl = ref('');

    const randomNum = Math.floor(Math.random() * 20) + 1;

    onMounted(async () => {        
        popularMovies.value = await fetchMovie();
        bannerUrl.value = popularMovies.value[randomNum]['backdrop_path'];
        console.log(bannerUrl.value);
        
    })
</script>