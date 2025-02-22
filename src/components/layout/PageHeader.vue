<template>
    <header>
        <div class="logo-section">
            <router-link to="/">
                <img src="../../assets/images/weblogo.png" alt="">
            </router-link>
        </div>

        <div class="nav-section">
            <router-link to="/">SIGN IN</router-link>
            <router-link to="/register">CREATE ACCOUNT</router-link>
            <router-link to="/films">FILMS</router-link>
            <router-link to="/lists">LISTS</router-link>
            <router-link to="/members">MEMBERS</router-link>
            <router-link to="/journal">JOURNAL</router-link>
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

<script>

</script>

<style lang="scss" scoped>
// @use '../../assets/styles/global.scss';

header {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    background-color: #181818;
    width: 100%;
    height: 70px;
    padding: 0 12%;
    box-sizing: border-box;

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
        font-weight: 900;
        display: flex;
        gap: 20px;
        width: 590px;
    }

    .search-section {
        position: relative;

        input {
            border-radius: 10px;
            outline: none;
            border: none;
            height: 30px;
            padding-right: 30px;
            opacity: 60%;
            font-family: vars.$font-primary;
        }

        .search-button {
            position: absolute;
            background: none;
            border: none;
            color: white;
            right: 5px;
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

</style>