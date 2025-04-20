<template>
    <div class="story-card">
        <img :src="story.image" alt="" class="story-thumbnail" />
        <div class="story-meta">{{ story.source }}</div>
        <h2 class="story-title">{{ story.title }}</h2>
        <p class="story-excerpt">{{ story.excerpt }}</p>
        <a href="#" class="story-readmore">READ STORY</a>
    </div>
</template>

<script setup>
const props = defineProps({
    story: Object,
});
</script>

<style lang="scss" scoped>
.story-card {
    display: inline-block;
    width: 90%;
    margin-bottom: 24px;
    background-color: #202830;
    color: #e5e7eb;
    padding: 16px;
    border-radius: 3px;
}

.story-thumbnail {
    width: 100%;
    height: 180px;
    object-fit: cover;
    margin-bottom: 12px;
}

.story-meta {
    font-size: 12px;
    color: #60a5fa;
    margin-bottom: 8px;
    font-weight: 500;
}

.story-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.4;
}

.story-excerpt {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 12px;
    line-height: 1.5;
}

.story-readmore {
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    padding-top: 8px;
    width: fit-content;
}
</style>
