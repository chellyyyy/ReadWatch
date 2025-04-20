<template>
<div class="review-card-container">
    <div class="review-img-container">
        <img :src="getImageUrl(imgSrc, 'small')" alt="">
    </div>

    <div class="review-info-container">
        <div class="film-info">
            <a href="" class="film-name">{{ movieName }}</a>
            <a href="" class="film-year">{{ movieYear }}</a>
        </div>
        <div class="review-detail">
            <a href="" class="user-icon">
                <img :src="userIcon" alt="" class="user-icon-src">
            </a>
            <a href="" class="user-name">{{ userName }}</a>
            <a href="" class="user-rating">
                <span>{{ userRating }}</span>
                <img width="14" height="14" src="https://img.icons8.com/ios-filled/50/40C057/star.png" alt=""/>
            </a>
            <!-- <a href="" class="reply-count">{{ replyCount }}</a> -->
        </div>
        <div class="review-content">
            <span>{{ reviewContent }}</span>
        </div>
        <div class="react-count">
            <img width="16" height="16" src="https://img.icons8.com/material-rounded/24/737373/like--v1.png" alt=""/>
            <span>{{ heartCount }}</span>
        </div>
    </div>
</div>
</template>

<script setup>
import { getImageUrl } from '../common/utils';

const props = defineProps({
    review: Object,
    imgSrc: String,
    userIcon: {type: String, default: "https://image.tmdb.org/t/p/w500//cnqztuI8rYP2XkGDvhMUmLbqnNe.jpg"},
    userName: {type: String, default: "user"},
    replyCount: {type: Number, default: 95},
    reviewContent: String,
    heartCount: {type: Number, default: 0},
    movieID: Number,
    movieName: String,
    userRating: Number,
    movieYear: String
})

</script>

<style lang="scss" scoped>
.review-card-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 25px;

    .review-img-container {
        width: 76px;
        height: 111px;
        overflow: hidden;
        border-radius: 3px;

        img {
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .film-info {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: flex-end;

        .film-name {
            font-family: vars.$font-secondary;
            font-weight: 900;
            font-size: 22px;
        }

        .film-year {
            color: vars.$font-grey;
        }
    }

    .review-detail {
        display: flex;
        align-items: center;
        gap: 10px;

        .user-icon-src {
            @include avatar-size(24px);
        }

        .user-name {
            color: vars.$font-grey;
            font-weight: bold;
            font-size: 14px;
        }

        .user-rating {
            color: vars.$rating-color;
            font-size: 14px;
            line-height: initial;

            img {
                margin-left: 3px;
                transform: translateY(1px);
            }
        }

        .reply-count {
            margin-top: 1px;
        }
    }

    .review-content {
        color: vars.$text-color;
        font-family: vars.$font-secondary;
        width: 550px;
        height: auto;

        span {
            line-height: 1.5;
        }
    }

    .react-count {
        color: vars.$text-color;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: flex-end;
        gap: 5px;
    }
}

.review-info-container div {
    margin-bottom: 8px;
}
</style>