<template>
<div class="review-card-container">
    <div class="review-img-container">
        <img :src="imgSrc" alt="">
    </div>

    <div class="review-info-container">
        <div class="film-info">
            <a href="" class="film-name">{{ filmName }}</a>
            <a href="" class="film-year">{{ filmYear }}</a>
        </div>
        <div class="review-detail">
            <a href="" class="user-icon">
                <img :src="userIcon" alt="" class="user-icon-src">
            </a>
            <a href="" class="user-name">{{ userName }}</a>
            <a href="" class="user-rating">{{ userRating }}</a>
            <a href="" class="reply-count">{{ replyCount }}</a>
        </div>
        <div class="react-count"></div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    imgSrc: {type: String, default: "https://image.tmdb.org/t/p/w500//cnqztuI8rYP2XkGDvhMUmLbqnNe.jpg"},
    filmName: {type: String, default: "Film Name"},
    filmYear: {type: String, default: "2025"},
    userIcon: {type: String, default: "https://image.tmdb.org/t/p/w500//cnqztuI8rYP2XkGDvhMUmLbqnNe.jpg"},
    userName: {type: String, default: "user"},
    userRating: {type: Number, default: 4.6},
    replyCount: {type: Number, default: 95}
})

</script>

<style lang="scss" scoped>
.review-card-container {
    display: flex;
    flex-direction: row;
    width: 100%;

    .review-img-container {
        width: 70px;
        height: 105px;
        overflow: hidden;
        border-radius: 5px;

        img {
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>