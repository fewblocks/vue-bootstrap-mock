<script setup>
import { reactive, ref } from "vue";
import NewsCard from "../molecules/NewsCard.vue";

// 色の配列を作って上から順番に流し込んでいく、,,,,X
// CSSで作る！
const colors = [];
const newsData = ref([
    {
        id: 1,
        new: "CommingSoon!",
        time: "2024年6月25日！！",
        message: "NewCollection追加！！",
        color: "#1144aa",
    },
    {
        id: 2,
        new: "CommingSoon!",
        time: "2024年6月24日！！",
        message: "NewCollection追加！！",
        color: "#44aacc",
    },
    {
        id: 3,
        new: "CommingSoon!",
        time: "2024年6月23日！！",
        message: "NewCollection追加！！",
        color: "#99bb22",
    },
]);
</script>
<template>
    <div class="news">
        <template v-for="news in newsData">
            <NewsCard v-bind:color="news.color">
                <template #new>{{ news.new }}</template>
                <template #time>{{ news.time }}</template>
                <template #message>{{ news.message }}</template>
            </NewsCard>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.news {
    // background-color: darkturquoise;
}
</style>
