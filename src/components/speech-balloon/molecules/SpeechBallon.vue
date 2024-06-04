<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
    id: number;
    top: Number;
    left: Number;
    line: String;
    directions: String;
}>();

const show = ref(false);
const positions = computed(() => {
    return {
        top: props.top + "%",
        left: props.left + "%",
    };
});

onMounted(() => {
    show.value = true;
});
</script>
<template>
    <transition name="slide-fade">
        <div class="speech-balloon" v-if="show">
            <div class="speech-ballon-line">
                {{ $props.line }}
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.speech-balloon {
    position: absolute;
    width: 250px;
    height: 120px;
    padding: 0px;
    top: v-bind("positions.top");
    left: v-bind("positions.left");
    background: #ebffff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border: #b7c1ff solid 3px;
    z-index: v-bind("id * 3");
}

.speech-ballon-line {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: v-bind("id * 3 + 1");
}

.speech-ballon-line:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 19px 14px 0;
    border-color: #ebffff transparent;
    display: block;
    width: 0;
    z-index: v-bind("id * 3 + 2");
    bottom: -19px;
    left: 45px;
}

.speech-ballon-line:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 23px 18px 0;
    border-color: #b7c1ff transparent;
    display: block;
    width: 0;
    z-index: v-bind("id * 3 + 1");
    bottom: -25px;
    left: 41px;
}
</style>
