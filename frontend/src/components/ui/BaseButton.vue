<template>
    <button :class="buttonClass" :disabled="disable" @click="$emit('click')">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {type: String, default: "medium"},
    disable: {type: Boolean, default: false},
})

const buttonClass = computed(() => [
    "btn",
    `btn-${props.size}`,
    {"btn-disabled": props.disable},
])
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    background-color: rgb(79, 219, 173);
    border-radius: 5px;
    font-family: vars.$font-primary;
    font-weight: 600;
    font-size: 18px;
}

.btn-small {
    height: 30px;
    width: 100px;
}

.btn-medium {
    height: 50px;
    width: 120px;
}

.btn-large {
    height: 40px;
    width: 250px;
}
</style>