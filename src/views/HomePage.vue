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
        <!-- <MovieGrid :movies="popularMovies" category="popular" size="small" /> -->
         <div class="introduction">
            <p class="intro-title">ReadWatch let you...</p>
            <div class="item-container">
                <div class="intro-item">
                    <img src="" alt="" class="item-icon">
                    <p class="intro-text">Keep track of every film you’ve ever watched (or just start from the day you join)</p>
                </div>

                <div class="intro-item">
                    <img src="" alt="" class="item-icon">
                    <p class="intro-text">Show some love for your favorite films, lists and reviews with a “like”</p>
                </div>

                <div class="intro-item">
                    <img src="" alt="" class="item-icon">
                    <p class="intro-text">Write and share reviews, and follow friends and other members to read theirs</p>
                </div>

                <div class="intro-item">
                    <img src="" alt="" class="item-icon">
                    <p class="intro-text">Rate each film on a five-star scale (with halves) to record and share your reaction</p>
                </div>

                <div class="intro-item">
                    <img src="" alt="" class="item-icon">
                    <p class="intro-text">Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)</p>
                </div>

                <div class="intro-item">
                    <img src="" alt="" class="item-icon">
                    <p class="intro-text">Compile and share lists of films on any topic and keep a watchlist of films to see</p>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import PageHeader from '@/components/layout/PageHeader.vue';
    // import MovieGrid from '@/components/movie/MovieGrid.vue';
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