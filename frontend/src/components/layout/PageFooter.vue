<template>
    <footer>
        <div class="upper-part">
            <div class="info-section">
                <router-link to="/">About</router-link>
                <router-link to="/">Term</router-link>
                <router-link to="/">Contact</router-link>
            </div>
            <div class="social-media">
                <img src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
                <img src="https://img.icons8.com/ios/50/FFFFFF/threads.png" alt="threads"/>
                <img src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v1.png" alt="twitterx--v1"/>
                <img src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/>
                <img src="https://img.icons8.com/ios/50/FFFFFF/youtube-play--v1.png" alt="youtube-play--v1"/>
            </div>
        </div>

        <div class="lower-part">
            <span>Letterboxd clone, Made by ttdang, Film data from TMDb.</span>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
footer {
    padding-top: 30px;
    width: 100%;
    height: 200px;
    background-color: vars.$secondary-color;
    font-family: vars.$font-primary;
    justify-items: center;
    box-sizing: border-box;

    .info-section a {
        margin-right: 10px;
    }

    .upper-part {
        @include flex-row;
        font-weight: bolder;
        font-size: large;
        width: 65%;
        justify-content: space-between;
        margin-bottom: 20px;

        .social-media {
            img {
                width: 28px;
                height: 28px;
                margin-left: 10px;
            }
        }
    }

    .lower-part {
        color: vars.$font-grey;
        width: 65%;
        justify-items: left;
    }
}

</style>