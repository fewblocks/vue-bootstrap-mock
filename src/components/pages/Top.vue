<script setup lang="ts">
import { RouterLink } from "vue-router";
import MainVisual from "@/components/organisms/MainVisual.vue";
import WordCloudVisual from "@/components/organisms/WordCloudVisual.vue";
</script>

<template>
    <main class="col-9" style="">
        <section>
            <MainVisual />
        </section>
        <section>
            <WordCloudVisual />
        </section>
    </main>
    <aside class="col-3">aside-content</aside>
</template>

<style scoped>
aside {
    background-color: darkgrey;
}
</style>
