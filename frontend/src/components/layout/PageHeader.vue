<template>
    <header :class="{ 'transparent-header': isHome }">
        <div class="logo-section">
            <router-link to="/">
                <img src="../../assets/images/weblogo.png" alt="">
            </router-link>
        </div>

        <div class="nav-section">
            <router-link to="/">SIGN IN</router-link>
            <router-link to="/">CREATE ACCOUNT</router-link>
            <router-link to="/">FILMS</router-link>
            <router-link to="/">LISTS</router-link>
            <router-link to="/">MEMBERS</router-link>
            <router-link to="/">JOURNAL</router-link>
        </div>

        <div class="search-section">
            <input
                type="text">

            <button class="search-button">
                <img src="../../assets/images/search-icon.svg" alt="">
            </button>
        </div>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

defineProps({
    isHome: { type: Boolean, default: true}
})

</script>

<style lang="scss" scoped>
header {
    @include flex-row;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: vars.$font-color-primary;
    background-color: vars.$primary-color;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    z-index: 900;

    .logo-section {
        width: 250px;

        img {
            width: 180px;
            height: 40px;
            margin-left: 10px;
            cursor: pointer;
        }
    }

    .nav-section {
        font-family: vars.$font-primary;
        font-weight: bold;
        display: flex;
        gap: 20px;
        width: 590px;
    }

    .search-section {
        position: relative;
        width: 200px;

        input {
            border-radius: 10px;
            outline: none;
            border: none;
            height: 30px;
            opacity: 60%;
            font-family: vars.$font-primary;
            padding: 0 28px 0 10px;
        }

        .search-button {
            position: absolute;
            background: none;
            border: none;
            color: vars.$font-color-primary;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;

            img {
                height: 25px;
                width: 25px;
            }
        }
    }
}

.transparent-header {
    top: 0;
    background: linear-gradient(to bottom, vars.$secondary-color, rgba(0, 0, 0, 0));
}

</style>