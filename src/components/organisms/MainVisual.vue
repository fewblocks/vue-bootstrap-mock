<script setup>
import topVisual from "@/assets/top-visual.png";
</script>
<template>
    <div class="top-visual-wrapper">
        <!-- row： 行 -->
        <img :src="topVisual" class="top-visual img-fluid" alr="top画像" />
    </div>
</template>

<style lang="scss" scoped>
.top-visual-wrapper {
    display: flex;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    .top-visual {
        background-color: red;
        max-width: 100%;
        height: auto;
    }
}
</style>
