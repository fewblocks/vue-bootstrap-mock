<script setup lang="ts">
defineProps<{
    color?: string;
}>();
</script>

<template>
    <div class="news-card">
        <div><slot name="new"></slot></div>
        <div><slot name="time"></slot></div>
        <div><slot name="message"></slot></div>
    </div>
</template>

<style scoped>
.news-card {
    background-color: v-bind(color);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
}
</style>
