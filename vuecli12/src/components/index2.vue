<template>
    <div class="div1">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(val,idx) in imgs"><img :src="val.img"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
    import img0 from "../assets/01.jpg"
    import img1 from "../assets/02.jpg"
    import img2 from "../assets/03.jpg";
    export default {
        name: 'div1',
        data (){
            return {
               imgs:[
                 {img:img0},{img:img1},{img:img2}
               ]
            }
        },
        mounted(){
          var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay : 5000,
            autoplayDisableOnInteraction : false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
          })
        },
    }
</script>


<style scoped>
  .swiper-container {
    width: 600px;
    height: 300px;
  }
  .div1 .swiper-slide img{ width: 100%; height: 100%;}
</style>
