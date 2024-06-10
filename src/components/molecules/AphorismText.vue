<script setup lang="ts">
import squareIcon from "@/assets/square-icon.png";
defineProps<{
    // english?: string;
    // japanese?: string;
}>();
</script>

<template>
    <div class="aphorism-text">
        <div
            class="ml-auto mx-auto col-9"
            style="display: flex; justify-content: start"
        >
            <div class="icon col-2 ml-auto mx-auto">
                <img
                    :src="squareIcon"
                    class="card-img-top d-block ml-auto mx-auto mb-5"
                    style="height: 60px; width: 60px"
                    alt="..."
                />
            </div>
            <div class="col-10">
                <div class="text"><slot name="english"></slot></div>
                <div class="text"><slot name="japanese"></slot></div>
                <div class="text"><slot name="quote"></slot></div>
                <div class="text"><slot name="description"></slot></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.aphorism-text {
    /* display: flex;
    justify-content: space-between; */
}
</style>
