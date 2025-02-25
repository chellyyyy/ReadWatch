<template>
    <div class="banner-container">
        <img :src="completeUrl(url)" alt="" class="banner">
        <div class="overlay"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    url: String
})

const completeUrl = (url) => {    
    return `https://image.tmdb.org/t/p/original${url}`;
}
</script>

<style lang="scss" scoped>
.banner-container {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 20%, black 100%);
}

.banner {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // box-shadow: inset 100px 100px 100px 100px rgba(0, 0, 0, 0.5);

}
</style>