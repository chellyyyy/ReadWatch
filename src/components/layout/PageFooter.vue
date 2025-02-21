<template>
    <footer>
        <div class="upper-part">
            <div class="info-section">
                <router-link to="/journal">About</router-link>
                <router-link to="/journal">Term</router-link>
                <router-link to="/journal">Contact</router-link>
            </div>
            <div class="social-media">
                <img src="https://img.icons8.com/windows/32/instagram-new.png" alt="instagram-new"/>
                <img src="https://img.icons8.com/pulsar-line/48/threads.png" alt="threads"/>
                <img src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png" alt="twitterx--v2"/>
                <img src="https://img.icons8.com/material-outlined/24/bluesky.png" alt="bluesky"/>
                <img src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new"/>
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
    width: 100%;
    height: 200px;
    background-color: $secondary-color;
    font-family: $font-primary;

    .upper-part {
        .social-media {
            img {
                width: 28px;
                height: 28px;
            }
        }
    }
}

</style>