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
        <!-- cast list -->
        <div v-if="currentTab === 'CAST'" class="cast-container">
            <span class="tag" v-for="person in cast">{{ person }}</span>
        </div>

        <!-- crew list -->
        <div
            v-for="[job, members] in Object.entries(crewData)"
            class="crew-container"
            v-if="currentTab.toLowerCase() === 'crew'"
        >
            <div class="team-name-container">
                <div class="team-name">{{ job }}</div>
            </div>

            <div class="team-members">
                <div v-for="member in members" class="tag">{{ member }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { preprocessCreditData } from '../common/utils';

const props = defineProps({
    staff: Object,
});

const tabs = ['CAST', 'CREW', 'DETAILS', 'GENRES', 'RELEASES'];
const currentTab = ref('CAST');

const getTabList = (tab) => {
    switch (tab) {
        case 'CAST':
            return cast;
        case 'CREW':
            return crewData;
        case 'DETAILS':
            return details;
        case 'GENRES':
            return genres;
        case 'RELEASES':
            return releases;
        default:
            return [];
    }
};

const crewData = preprocessCreditData(props.staff.crew);

// Fake data
const cast = ['Takeru Satoh', 'Masami Nagasawa', 'Nana Mori', 'Taiga Nakano', 'Ayumu Nakajima', 'Yuumi Kawai'];

const crew = props.staff.crew;
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

.cast-container,
.team-members {
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
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.05);
    letter-spacing: 0.5px;
}

.crew-container {
    width: 390px;
    height: auto;
    display: flex;
    flex-direction: row;
    color: white;

    .team-name-container {
        width: 156px;
        font-size: 12px;
        color: vars.$team-role;
        text-transform: uppercase;
        align-content: center;

        .team-name {
            width: 95%;
            border-bottom: 1px solid #374151;

            // position: relative;
            // min-width: auto; // hoặc auto
            // margin-right: 12px;
            // text-transform: uppercase;
            // color: #6b7280; // màu xám nhạt
            // white-space: nowrap;

            // &::after {
            //     content: '';
            //     position: absolute;
            //     top: 50%;
            //     // left: 100%;
            //     transform: translateY(-50%);
            //     height: 1px;
            //     width: 100px;
            //     background-color: #374151; // màu line
            // }
        }
    }

    .team-members {
        width: 238px !important;
        white-space: nowrap;
        min-width: 230px;
        
    }
}
</style>
