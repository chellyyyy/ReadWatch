<template>
    <div 
        class="reviewer-list-container" 
        v-for="(reviewer, index) in reviewers.slice(0, 5)" 
        :key="index"
    >
        <div class="reviewser-icon-container">
            <img :src="reviewer.avatar_url" alt="" class="reviewer-icon" />
        </div>

        <div class="reviewer-metadata-container">
            <a class="reviewer-name">{{ reviewer.username }}</a>
            <a class="reviewer-stat">{{ reviewer.review_count }}&nbsp;reviews</a>
        </div>
    </div>
    
</template>

<script setup>
import { getReviewers } from '@/services/reviewAPI';
import { onMounted, ref } from 'vue';

const reviewers = ref([]);

onMounted(async () => {
    try {
        reviewers.value = await getReviewers();
        console.log('RVERS: ', reviewers.value);
    } catch (err) {
        console.error('Failed to load reviewers:', err);
    }
});
</script>

<style lang="scss" scoped>
.reviewer-list-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 50px;
    margin: 10px 0;
    @include devider;
}

.reviewer-name {
    color: vars.$font-color-primary;
    font-weight: bold;
    font-size: 15px;
}

.reviewer-icon {
    @include avatar-size(40px);
}

.reviewer-metadata-container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .reviewer-stat {
        font-size: 12px;
        color: vars.$font-grey;
        font-weight: 300;
    }
}

</style>
