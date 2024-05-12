<script setup>
import wordCloudSrc from "@/assets/word-cloud.png";
</script>
<template>
    <div class="word-cloud-visual-wrapper col-12 pt-4">
        <!-- row： 行 -->
        <img
            :src="wordCloudSrc"
            class="word-cloud-visual img-fluid"
            alr="ワードクラウド画像"
        />
    </div>
</template>

<style lang="scss" scoped>
.word-cloud-visual-wrapper {
    display: flex;
    justify-content: end;
    .word-cloud-visual {
        background-color: red;
        max-width: 100%;
        height: auto;
    }
}
</style>
