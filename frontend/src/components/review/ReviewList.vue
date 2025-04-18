<template>
    <div class="review-container">
        <div v-for="(review, index) in reviews" :key="index">
            <ReviewCard
                :review="review"
                :movieID="review.movie_id"
                :movie-name="review.movieName"
                :movie-year="review.movieYear"
                :user-rating="review.rating"
                :review-content="review.content"
                :img-src="review.imgSrc"
            />

            <div v-if="index < reviews.length - 1" class="devider"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getReviews } from '@/services/reviewAPI.js'
import { getMovieDetail } from '../common/utils'
import ReviewCard from './ReviewCard.vue'

const reviews = ref([])

onMounted(async () => {
    try {
        const res = await getReviews()
        const first5 = res.slice(0, 5)

        // Duyệt từng review và thêm movieName async
        const enriched = await Promise.all(
            first5.map(async (review) => {
                // console.log("RV: ", review);
                
                const movieInfo = await getMovieDetail((review.movie_id).toString());
                let movieName = movieInfo.original_title;
                let movieYear = movieInfo.release_date.slice(0, 4);
                let imgSrc = movieInfo.poster_path;

                return {
                    ...review,
                    movieName: movieName || 'Unknown',
                    movieYear: movieYear || 'Unknown',
                    imgSrc: imgSrc,
                }
            })
        );

        reviews.value = enriched;
    } catch (err) {
        console.error('Failed to load reviews:', err);
    }
})

</script>
<style lang="scss" scoped>
.review-container {
    margin: 10px 0 20px 0;
}

.devider {
    border-bottom: solid 1px vars.$devider-color;
    margin: 15px 0 15px 0;
}
</style>