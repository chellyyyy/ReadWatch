<template>
    <div class="home-banner">
        <div class="banner-container">
            <img :src="completeUrl(url)" alt="" class="banner">
            <div class="overlay"></div>
        </div>

        <div class="quote-container">
            <span class="quote">
                Track films you've watched. <br> 
                Save those you want to see. <br>
                Tell your friends what's good.
            </span>
        </div>

        <div class="button-container">
            <BaseButton size="large">
                Get started - it's free!
            </BaseButton>

            <span>The social network for film lovers.</span>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';
import BaseButton from '../ui/BaseButton.vue'

defineProps({
    url: String
})

const completeUrl = (url) => {    
    return `https://image.tmdb.org/t/p/original${url}`;
}
</script>

<style lang="scss" scoped>
.home-banner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
}

.banner-container {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin: 0 auto 0 auto;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0,0,0,0) 20%, vars.$primary-color 80%, vars.$primary-color 100%);
}

.banner {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bottom-garident {
    transform: translateY(-50%);
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, vars.$primary-color 60%, rgba(255,255,255,0) 100%);
}

.quote-container {
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 300px;
    background: linear-gradient(0deg, vars.$primary-color 60%, rgba(24, 24, 24, 0.062) 100%);

    .quote {
        font-family: vars.$font-secondary;
        font-weight: 900;
        font-size: 45px;
        color: vars.$font-color-primary;
        line-height: 1.34;
    }
}

.button-container {
    height: 100px;
    transform: translateY(-80%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 16px;
        font-weight: 600;
        font-family: vars.$font-primary;
        color: vars.$font-color-primary;
    }
}

</style>