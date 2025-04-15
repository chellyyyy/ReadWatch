<template>
    <div class="list-header">
        <div class="list-title">{{ listTitle }}</div>
        <div class="list-expand">
            <router-link to="/">{{ listExpand }}</router-link>
        </div>
        
    </div>
</template>

<script setup>
defineProps({
    listTitle: String,
    listExpand: {type: String, default: "MORE"},
    linkTo: String
})

</script>

<style lang="scss" scoped>

.list-header {
    font-size: small;
    color: vars.$font-grey !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: solid 1px vars.$devider-color;
    line-height: 1.5;

    .list-expand a {
        color: vars.$font-grey !important;
        cursor: pointer;
    }
}

</style>