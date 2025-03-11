<template>
    <div class="home">
        <HomeBanner :url="bannerUrl"/>
        <PageHeader />
        <div id="poppular-list">
            <MovieCollection 
                :movies="popularMovies" 
                size="large"
                :movieNum="6"
            />
        </div>
        <MovieGrid :movies="popularMovies" category="popular" size="small" />
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import PageHeader from '@/components/layout/PageHeader.vue';
    import MovieGrid from '@/components/movie/MovieGrid.vue';
    import HomeBanner from '@/components/movie/HomeBanner.vue';
    import { fetchMovie } from '@/services/tmdbAPI';
    import MovieCollection from '@/components/movie/MovieCollection.vue';

    const popularMovies = ref([]);
    const bannerUrl = ref('');
    const randomNum = Math.floor(Math.random() * 20) + 1;

    onMounted(async () => {        
        popularMovies.value = await fetchMovie();
        bannerUrl.value = popularMovies.value[randomNum]['backdrop_path'];
        
    })
</script>

<style lang="scss" scoped>
    .home {
        position: relative;
        background-color: vars.$primary-color;
        z-index: -2;
    }

    #poppular-list {
        position: relative;
        height: 300px;
        width: 100%;
    }
</style>