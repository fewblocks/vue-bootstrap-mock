<script setup>
import topVisual from "@/assets/top-visual.png";
</script>
<template>
    <div class="top-visual-wrapper col-12">
        <!-- row： 行 -->
        <img :src="topVisual" class="top-visual img-fluid" alr="top画像" />
    </div>
</template>

<style lang="scss" scoped>
.top-visual-wrapper {
    display: flex;
    justify-content: end;
    .top-visual {
        background-color: red;
        max-width: 100%;
        height: auto;
    }
}
</style>
