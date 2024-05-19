<script setup lang="ts">
import { RouterLink } from "vue-router";
import WordCloudVisual from "@/components/organisms/WordCloudVisual.vue";
import NewsContent from "@/components/organisms/NewsContent.vue";
import RelatedSite from "@/components/organisms/RelatedSite.vue";
import FlipCardDemo from "@/components/flip-card/FlipCardDemo.vue";
</script>

<template>
    <main class="col-sm-12 col-md-9">
        <section>
            <WordCloudVisual />
        </section>
        <section>
            <FlipCardDemo />
        </section>
        <section>
            <NewsContent />
        </section>
        <section>
            <RelatedSite />
        </section>
    </main>
    <aside class="col-sm-12 col-md-3">aside-content</aside>
</template>

<style scoped>
aside {
    background-color: #ffcc27;
}
</style>
