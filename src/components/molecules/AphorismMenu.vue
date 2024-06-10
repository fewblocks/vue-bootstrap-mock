<script setup lang="ts">
defineProps<{
    color?: string;
}>();
</script>

<template>
    <div class="aphorism-menu">
        <div>
            <p>ジョジョの奇妙な冒険</p>
            <p>スピードワゴンの名言1</p>
        </div>
        <div
            class=""
            style="
                display: flex;
                justify-content: space-between;
                align-items: end;
            "
        >
            <div>
                <button class="btn btn-primary my-2 my-sm-0 w" type="submit">
                    dowwnload
                </button>
            </div>
            <div>
                <button class="btn btn-secondary my-2 my-sm-0 w" type="submit">
                    もっと見る
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.aphorism-menu {
    display: flex;
    justify-content: space-between;
}
</style>
