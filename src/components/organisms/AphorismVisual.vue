<script setup lang="ts">
import aphorismVisual from "@/assets/aphorism-image.png";

// C:\develop\Learnispirits\repository\repo\vue-bootstrap-mock\src\assets\aphorism-image.png
</script>
<template>
    <div class="aphorism-visual-wrapper">
        <!-- row： 行 -->
        <img
            :src="aphorismVisual"
            class="aphorism-visual img-fluid"
            alr="名言石碑画像"
        />
    </div>
</template>
<!-- <style lang="scss" scoped>
.card-footer {
    background-color: v-bind(color);
}
</style> -->

<style lang="scss" scoped>
.aphorism-visual-wrapper {
    display: flex;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    .aphorism-visual {
        background-color: red;
        max-width: 100%;
        height: auto;
    }
}
</style>
