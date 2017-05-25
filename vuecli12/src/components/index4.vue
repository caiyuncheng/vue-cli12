<template>
    <div class="div1">
        <p>我是谁: <slot name="a"></slot></p>
        <p>我来自哪里: <slot name="b"></slot></p>
        <p>哈哈哈: <slot name="c"></slot></p>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {

            }
        }
    }
</script>


<style scoped>

</style>
