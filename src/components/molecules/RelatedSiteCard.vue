<script setup lang="ts">
import relatedSiteImage from "@/assets/related-site-image.png";
defineProps<{
    color?: string;
}>();
</script>

<template>
    <div class="col">
        <div class="card">
            <img :src="relatedSiteImage" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title"><slot name="title"></slot></h5>
                <p class="card-text">
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary"
                    ><slot name="message"></slot
                ></small>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-footer {
    background-color: v-bind(color);
}
</style>
