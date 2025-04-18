<template>
    <div class="home">
        <HomeBanner :url="bannerUrl"/>
        <PageHeader />
        <div id="poppular-list">
            <MovieCollection 
                :movies="popularMovies" 
                size="large"
                :movieNum="'6'"
            />
        </div>

        <div class="introduction">
            <div class="intro-title">
                <p>&nbsp;&nbsp;&nbsp;READWATCH LET YOU...</p>
            </div>
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
                :movieNum="'12'"
            />
            </div>
        </div>

        <div class="mid-title-container">
            <p class="mid-title">Write and share reviews. Compile your own lists. Share your life in film.</p>
            <p class="mid-intro">Below are some popular reviews and lists from this week. Sign up to create your own.</p>
        </div>

        <div class="popular-container">
            <div class="popular-left-part">
                <ListHeader 
                    list-title="POPULAR REVIEWS THIS WEEK"
                    link-to="/"
                />

                <ReviewList />
            </div>
            <div class="popular-right-part">
                <div class="poppular-upper-right">
                    <ListHeader 
                        list-title="POPULAR LISTS"
                        link-to="/"
                    />
                    <ListPreview />
                </div>
                <div class="poppular-lower-right"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import PageHeader from '@/components/layout/PageHeader.vue';
    import HomeBanner from '@/components/movie/HomeBanner.vue';
    import { fetchMovie } from '@/services/tmdbAPI';
    import MovieCollection from '@/components/movie/MovieCollection.vue';
    import PromoItem from '@/components/ui/PromoItem.vue';
    import ReviewList from '@/components/review/ReviewList.vue';
    import ListHeader from '@/components/ui/ListHeader.vue';
    import ListPreview from '@/components/list/ListPreview.vue';

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
    width: 1050px;

    .intro-title {
        color: vars.$font-grey;
        width: 100%;
    }

    .promo-container {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 32.9% 32.9% 32.9%;
        gap: 10px;
        padding: 10px;
    }
}

.live-feed {
    color: vars.$font-grey;
    margin-top: 30px;

    .live-header {
        margin-bottom: 10px;
        border-bottom: solid 1px vars.$devider-color;
        line-height: 1.5;
    }
}

.mid-title-container {
    color: vars.$font-grey;
    text-align: center;
    margin: 30px 0px;

    .mid-title {
        font-size: 26px;
        margin: 40px 0 20px 0;
    }
}

.popular-container {
    width: 1022px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .popular-left-part {
        width: 68%;
    }

    .popular-right-part {
        width: 230px;
    }
}

</style>