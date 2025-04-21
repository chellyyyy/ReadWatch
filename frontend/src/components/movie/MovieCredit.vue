<template>
    <div class="credit-container">
        <!-- Tab Header -->
        <div class="credit-tabs">
            <div
                v-for="tab in tabs"
                :key="tab"
                :class="['credit-tab', { active: currentTab === tab }]"
                @click="currentTab = tab"
            >
                {{ tab }}
            </div>
        </div>

        <!-- Tab Body -->
        <div class="credit-tags" v-if="currentTab === 'CAST'">
            <span class="tag" v-for="person in cast" :key="person">{{ person }}</span>
        </div>
        <div class="credit-tags" v-else>
            <span class="tag">No data yet for {{ currentTab }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ['CAST', 'CREW', 'DETAILS', 'GENRES', 'RELEASES'];
const currentTab = ref('CAST');

// Fake data
const cast = [
    'Takeru Satoh',
    'Masami Nagasawa',
    'Nana Mori',
    'Taiga Nakano',
    'Ayumu Nakajima',
    'Yuumi Kawai',
    'Rie Tomosaka',
    'Yutaka Takenouchi',
    'Jun Hashimoto',
    'Shingo Mizusawa',
    'Jun Sena',
    'Kaori Shima',
    'Shoko Takada',
];
</script>

<style scoped lang="scss">
.credit-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.credit-tabs {
    display: flex;
    gap: 20px;
    height: 20px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    @include devider;
}

.credit-tab {
    cursor: pointer;
    color: vars.$rating-color;
    position: relative;
    padding-bottom: 4px;
    transition: color 0.2s;
    height: 18px;

    &.active {
        color: #ffffff;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #ffffff;
        }
    }
}

.credit-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.tag {
    background-color: vars.$tag-color;
    color: vars.$text-color;
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 3px;
    box-shadow: inset 0 1px rgba(255, 255, 255, .05);
    letter-spacing: 0.5px;
}
</style>
