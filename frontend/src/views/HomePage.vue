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

        <div class="introduction">
            <p class="intro-title">READWATCH LET YOU...</p>
            <div class="promo-container">
                <PromoItem 
                    iconSrc="https://img.icons8.com/hatch/64/menu-2.png"
                    promoText="Keep track of every film you’ve ever watched (or just start from the day you join)"
                />
                <PromoItem 
                    iconSrc="https://img.icons8.com/hatch/64/menu-2.png"
                    promoText="Show some love for your favorite films, lists and reviews with a “like”"
                />
                <PromoItem 
                    iconSrc="https://img.icons8.com/hatch/64/menu-2.png"
                    promoText="Write and share reviews, and follow friends and other members to read theirs"
                />
                <PromoItem 
                    iconSrc="https://img.icons8.com/hatch/64/menu-2.png"
                    promoText="Rate each film on a five-star scale (with halves) to record and share your reaction"
                />
                <PromoItem 
                    iconSrc="https://img.icons8.com/hatch/64/menu-2.png"
                    promoText="Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)"
                />
                <PromoItem 
                    iconSrc="https://img.icons8.com/hatch/64/menu-2.png"
                    promoText="Compile and share lists of films on any topic and keep a watchlist of films to see"
                />
            </div>
        </div>

        <div class="live-feed">
            <div class="live-header">
                <p class="live-feed-title">JUST REVIEWED...</p>
                <p class="live-status"></p>
            </div>

            <div class="live-body">
                <MovieCollection 
                :movies="popularMovies" 
                size="small"
                :movieNum="12"
            />
            </div>
        </div>

        <div class="mid-title-container">
            <p class="mid-title">Write and share reviews. Compile your own lists. Share your life in film.</p>
            <!-- <p class="mid-title">TESTTESTTESTTESTTESTTESTTESTTESTTEST</p> -->
            <p class="mid-intro">Below are some popular reviews and lists from this week. Sign up to create your own.</p>
        </div>

        <ReviewCard />
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import PageHeader from '@/components/layout/PageHeader.vue';
    import HomeBanner from '@/components/movie/HomeBanner.vue';
    import { fetchMovie } from '@/services/tmdbAPI';
    import MovieCollection from '@/components/movie/MovieCollection.vue';
    import PromoItem from '@/components/ui/PromoItem.vue';
    import ReviewCard from '@/components/review/ReviewCard.vue';

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
    display: flex;
    flex-direction: column;
    align-items: center;
}

#poppular-list {
    position: relative;
    height: 300px;
    width: 100%;
}

.introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 60%;

    .intro-title {
        position: absolute;
        color: vars.$font-grey;
        left: 355px;
    }

    .promo-container {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        flex-wrap: wrap;
    }
}

.live-feed {
    color: vars.$font-grey;
    margin: 30px 0 0 10px;

    .live-header {
        margin-bottom: 10px;
        border-bottom: solid 1px vars.$devider-color;
        line-height: 1.5;
    }
}

.mid-title-container {
    color: vars.$font-grey;
    text-align: center;

    .mid-title {
        font-size: 26px;
        margin: 40px 0 20px 0;
    }
}

</style>