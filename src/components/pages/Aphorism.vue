<script setup>
import { ref } from "vue";
import SpeechBalloons from "@/components/speech-balloon/organisms/SpeechBallons.vue";
import AphorismMenu from "@/components/molecules/AphorismMenu.vue";
import AphorismVisual from "@/components/organisms/AphorismVisual.vue";
</script>

<template>
    <main class="col-sm-12 col-md-9">
        <section>
            <div class="mt-5">
                <AphorismMenu />

                <AphorismVisual />
            </div>
        </section>
        <section>
            <SpeechBalloons />
        </section>
    </main>
    <aside class="col-sm-12 col-md-3">aside-content</aside>
</template>

<style scoped>
aside {
    background-color: #ffcc27;
}
</style>
