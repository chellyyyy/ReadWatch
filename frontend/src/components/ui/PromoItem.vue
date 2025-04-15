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
    color: vars.$font-grey;
    height: 90px;
    // width: 20%;
    background-color: vars.$secondary-color;
    border-radius: 5px;
    padding: 10px;
    // margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex: 10% 90%;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    img {
        width: 60px;
        height: 56px;
    }

    .intro-text {
        margin-right: 20px;
        line-height: 1.5;
    }
}

</style>