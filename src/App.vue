<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouterView } from "vue-router";
import HeaderBar from "@/components/organisms/HeaderBar.vue";

// ルーティング
const router = useRouter();
</script>

<template>
    <HeaderBar />
    <RouterView />
</template>

<style scoped></style>
