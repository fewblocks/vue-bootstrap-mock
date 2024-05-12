<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouterView } from "vue-router";
import HeaderBar from "@/components/organisms/HeaderBar.vue";
import FooterBar from "@/components/organisms/FooterBar.vue";

// ルーティング
const router = useRouter();
</script>

<template>
    <header>
        <HeaderBar />
    </header>
    <div
        class="row gx-0"
        style="
            padding-top: 56px;
            display: flex;
            justify-content: center;
            max-width: 100%;
        "
    >
        <RouterView />
    </div>
    <footer class="footer container-fluid mt-auto">
        <FooterBar />
    </footer>
</template>

<style scoped>
.footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: dimgrey;
    display: flex;
    justify-content: center;
}
</style>
