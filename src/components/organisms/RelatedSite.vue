<script setup>
import relatedSiteImage from "@/assets/related-site-image.png";
import RelatedSiteCard from "../molecules/RelatedSiteCard.vue";
import { ref } from "vue";

const relatedSiteData = ref([
    {
        id: 1,
        title: "ナルト",
        description:
            "aThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        message: "Last updated 3 mins ago",
        color: "#1144aa",
    },
    {
        id: 2,
        title: "HUNTER X HUNTER",
        description:
            "This card has supporting text below as a natural lead-in to additional content.",
        message: "Last updated 3 mins ago",
        color: "#44aacc",
    },
    {
        id: 3,
        title: "僕のヒーローアカデミア",
        description:
            "This is a wider card with suppor ting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
        message: "Last updated 3 mins ago",
        color: "#99bb22",
    },
]);
</script>
<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-3 g-4 w-100">
        <template v-for="relatedSite in relatedSiteData">
            <RelatedSiteCard v-bind:color="relatedSite.color">
                <template #title>{{ relatedSite.title }}</template>
                <template #description>{{ relatedSite.description }}</template>
                <template #message>{{ relatedSite.message }}</template>
            </RelatedSiteCard>
        </template>
    </div>
</template>

<style lang="scss" scoped></style>
