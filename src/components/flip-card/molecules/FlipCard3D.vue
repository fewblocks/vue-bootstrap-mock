<script setup>
import { computed } from "vue";

const props = defineProps({
    ja: String,
    en: String,
    flip: Boolean,
});

const flipClass = computed(() => {
    return props.flip
        ? "flip-card-inner flip-card-backback"
        : "flip-card-inner";
});
</script>

<template>
    <div class="flip-card">
        <div :class="flipClass">
            <div class="flip-card-front">{{ props.ja }}</div>
            <div class="flip-card-back">{{ props.en }}</div>
        </div>
    </div>
</template>

<style scoped>
.flip-card {
    position: absolute;
    background-color: transparent;
    width: 240px;
    height: 160px;
    -webkit-transform: skew(-20deg) rotate(-20deg) rotateX(-20deg)
        rotateY(-20deg) perspective(200px);
    transform: skew(-20deg) rotate(-20deg) rotateX(-20deg) rotateY(-20deg)
        perspective(200px);
    -webkit-transition: 0.9s;
    transition: 0.9s;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* .flip-card:hover .flip-card-inner {
  transform: rotateX(180deg);
} */

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
}

/* 5枚目だけアニメーションを付ける */
.flip-card:nth-of-type(5) .flip-card-front {
    background: linear-gradient(110deg, #bbbbbb 8%, #f5f5f5 18%, #bbbbbb 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 2s shine linear infinite;
}
@keyframes shine {
    to {
        background-position-x: -200%;
    }
}

.flip-card-back {
    background-color: dodgerblue;
    transform: rotateX(180deg);
}

.flip-card:nth-of-type(1) {
    top: 0px;
    left: 0px;
    opacity: 0;
}

.flip-card:nth-of-type(2) {
    top: 10px;
    left: 100px;
    opacity: 0.4;
}

.flip-card:nth-of-type(3) {
    top: 20px;
    left: 150px;
    opacity: 0.6;
}

.flip-card:nth-of-type(4) {
    top: 30px;
    left: 200px;
    opacity: 0.8;
}

.flip-card:nth-of-type(5) {
    top: 40px;
    left: 250px;
    opacity: 1;
    -webkit-transform: skew(-0deg) rotate(-0deg) rotateX(-0deg) rotateY(-0deg)
        perspective(0px);
    transform: skew(-0deg) rotate(-0deg) rotateX(-0deg) rotateY(-0deg)
        perspective(0px);
}

.flip-card:nth-of-type(6) {
    top: 50px;
    left: 300px;
    opacity: 0;
    -webkit-transform: skew(-40deg) rotate(-40deg) rotateX(-40deg)
        rotateY(-40deg) perspective(200px);
    transform: skew(-40deg) rotate(-40deg) rotateX(-40deg) rotateY(-40deg)
        perspective(200px);
}

.flip-card-backback {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
}
</style>
