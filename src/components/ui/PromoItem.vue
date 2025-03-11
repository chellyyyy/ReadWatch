<template>
    <div class="intro-item">
        <img :src="iconSrc" alt="" class="item-icon">
        <p class="intro-text">{{ promoText }}</p>
    </div>
</template>

<script setup>
defineProps({
    iconSrc: String,
    promoText: String,
})


</script>

<style lang="scss" scoped>
.intro-item {
    height: 100px;
    width: 300px;
    
}
</style>