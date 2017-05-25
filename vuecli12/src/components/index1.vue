<template>
    <div class="div1">
        {{mag}}
      <p><button @click="btn1">我要去测试1</button></p>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                mag: "我是测试2"
            }
        },
        methods:{
          btn1(){
              this.$emit("aaa");
          }
        }
    }
</script>


<style scoped>
  .div1{ width: 300px; padding: 50px; border: 1px solid #000; border-radius: 10px; margin: 30px auto 0;}
  .div1 p{ margin: 20px 0;}
</style>
