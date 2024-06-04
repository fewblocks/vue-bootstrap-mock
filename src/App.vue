<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { RouterView } from "vue-router";
import Navbar from "@/components/organisms/Navbar.vue";
import FooterBar from "@/components/organisms/FooterBar.vue";
import MainVisual from "@/components/organisms/MainVisual.vue";

// ルーティング
const router = useRouter();
const route = useRoute();
route.name;
</script>

<template>
    <header>
        <!-- Topページのみ -->
        <template v-if="route.name === 'top'">
            <MainVisual />
        </template>
        <temlate v-else>
            <div></div>
        </temlate>
    </header>
    <Navbar />
    <div class="main-content">
        <div
            class="row gx-0"
            style="display: flex; justify-content: flex-start; max-width: 100%"
        >
            <RouterView />
        </div>
    </div>
    <footer class="footer container-fluid mt-auto">
        <FooterBar />
    </footer>
</template>

<style scoped>
.footer {
    max-width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 300px;
    background-color: dimgrey;
    display: flex;
    justify-content: center;
}
.main-content {
    max-width: 1280px;
    /* TODO: 暫定値、モバイル対応のEため正式な設定値が必要 */
    min-width: 375px;
    margin: 0 auto;
}
</style>
