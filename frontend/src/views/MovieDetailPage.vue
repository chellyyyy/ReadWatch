<template>
    <div class="movie-detail">
        <HomeBanner :url="movieDetail.backdrop_path" :isHomePage="false" />
        <PageHeader />
        <div class="banner-footer"></div>

        <div class="detail-container">
            <div class="detail-left-container">
                <img :src="getImageUrl(movieDetail.poster_path, 'original')" alt="" class="movie-poster" />
                <div class="movie-stat">
                    <a href="" class="movie-watchced">
                        <img
                            src="https://img.icons8.com/sf-regular-filled/16/40C057/visible.png"
                            alt=""
                            class="watched-icon"
                        />
                        <span class="watched-count">99</span>
                    </a>

                    <a href="" class="movie-in-list">
                        <img
                            src="https://img.icons8.com/material-rounded/16/228BE6/grid-2.png"
                            alt=""
                            class="in-list-icon"
                        />
                        <span class="in-list-count">99</span>
                    </a>

                    <a href="" class="movie-loved">
                        <img
                            src="https://img.icons8.com/material-rounded/16/FD7E14/like--v1.png"
                            alt=""
                            class="loved-icon"
                        />
                        <span class="loved-count">99</span>
                    </a>
                </div>

                <div class="movie-watch">
                    <div class="watch-header">WHERE TO WATCH</div>
                    <div class="watch-site">Not streaming.</div>
                </div>
            </div>

            <div class="detail-right-container">
                <div class="movie-basic-info">
                    <div class="movie-en-title">{{ movieDetail.title }}</div>
                    <div class="movie-metablock">
                        <!-- Release info -->
                        <a href="" class="movie-relase-year">
                            {{ sliceDate(movieDetail.release_date) }}
                        </a>

                        <!-- Title info -->
                        <em class="movie-original-title">「{{ movieDetail.original_title }}」</em>

                        <!-- Staff info -->
                        <div class="movie-staff">
                            Directed by
                            <a href="" class="movie-director">{{ directorName }}</a>
                        </div>
                    </div>
                </div>

                <div class="movie-more-detail">
                    <!-- Overview, description -->
                    <div class="movie-overview">
                        {{ movieDetail.overview }}
                    </div>

                    <MovieCredit />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeBanner from '@/components/movie/HomeBanner.vue';
import PageHeader from '@/components/layout/PageHeader.vue';
import { getMovieInfo } from '@/services/tmdbAPI';
import { getDirector, getImageUrl, sliceDate } from '@/components/common/utils';
import { ref, onMounted, computed } from 'vue';
import MovieCredit from '@/components/movie/MovieCredit.vue';

const props = defineProps({
    movie_id: String,
});

const movieDetail = ref({});
const directorInfo = ref(null);

onMounted(async () => {
    try {
        // movieDetail.value = await getMovieInfo(props.movie_id);
        movieDetail.value = await getMovieInfo(1120846); // for test only
        directorInfo.value = getDirector(movieDetail.value.credits);
    } catch (err) {
        console.error('Failed to load movie details:', err);
    }
});

const directorName = computed(() => {
    return directorInfo.value?.name || 'Unknown';
});
</script>

<style lang="scss" scoped>
.movie-detail {
    @include main-banner;
}

.banner-footer {
    transform: translateY(-60%);
    height: 100px;
    width: 100%;
    background: linear-gradient(0deg, vars.$primary-color 60%, rgba(24, 24, 24, 0.062) 100%);
}

.detail-container {
    display: flex;
    flex-direction: row;
    width: 950px;

    .detail-left-container {
        width: 230px;
        height: auto;
        margin-right: 50px;

        .movie-poster {
            width: 230px;
            height: 345px;
            border-radius: 3px;
        }

        .movie-stat,
        .movie-watchced,
        .movie-in-list,
        .movie-loved {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            span {
                font-size: 12px;
                font-weight: 300;
                color: vars.$font-grey;
                margin-left: 3px;
            }
        }

        .movie-stat {
            gap: 10px;
            margin-top: 10px;
            margin-bottom: 5px;
        }
    }

    .detail-right-container {
        width: 670px;
        height: auto;
        font-size: 17px !important;
        letter-spacing: 0.02em;

        .movie-en-title {
            font-size: 42px;
            color: vars.$font-color-primary;
            font-family: vars.$font-secondary;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .movie-metablock {
            display: flex;
            flex-direction: row;
            gap: 20px;

            .movie-relase-year,
            .movie-staff a {
                color: vars.$hyper-link;
                font-weight: 200;
                text-decoration: underline;
                text-underline-offset: 4px;
            }

            .movie-original-title,
            .movie-staff {
                color: vars.$text-color;
            }

            .movie-original-title {
                letter-spacing: 0.5px;
            }
        }
    }

    .movie-watch {
        width: 230px;
        border-radius: 3px;
        margin-top: 30px;
        border-radius: 3px;

        .watch-header {
            background: #242c34;
        }

        .watch-header,
        .watch-site {
            height: 29px;
            align-content: center;
            text-align: left;
            padding-left: 10px;
            color: vars.$font-grey;
            font-size: 11px;
            letter-spacing: 0.075em;
            border: #242c34 1px solid;
        }

        .watch-site {
            height: 36px;
        }
    }

    .movie-more-detail {
        width: 390px;
        height: auto;
        margin-top: 40px;

        .movie-overview {
            font-family: vars.$font-paragraph;
            color: vars.$text-color;
            line-height: 1.5;
            letter-spacing: 0.5px;
            font-size: 16px;
            font-weight: 300;
            margin-bottom: 40px;
        }
    }
}
</style>
