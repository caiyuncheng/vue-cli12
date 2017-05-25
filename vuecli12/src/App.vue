<template>
  <div id="app" class="app">
    <img src="./assets/logo.png">
    <p>
       <router-link to="/">首页</router-link>
       <router-link to="/index2">幻灯片</router-link>
       <router-link to="/index3">计算属性</router-link>
       <router-link to="/index4">slot传值</router-link>
    </p>


    <router-view>
        <span slot="a">{{info.name}}</span>
        <span slot="b">{{info.dzhi}}</span>
        <span slot="c">{{info.lyi}}</span>
    </router-view>

    <div class="div2">
      <transition
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
          <router-view :name="txt" @aaa="btn1"></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
        txt:"left",
        info:{
            name:"蔡运成",
            dzhi:"广西北流市白马",
            lyi:"哈哈哈"
        }
    }
  },
  methods:{
      btn1(){
          if(this.txt == "left"){
              this.txt ="right";
          }else{
              this.txt ="left";
          }
      },
      enter(el,done){
//        Velocity(el,{backgroundColor:"#f00"})
//        Velocity(el,{backgroundColor:"#f00",opacity:1},{duration: 500 },{complete:done})
        Velocity(el,"slideDown", { duration: 500 },{complete:done});
      },
      leave(el,done){
//        Velocity(el,{backgroundColor:"#f60"})
//        Velocity(el,{backgroundColor:"#f60",opacity:0},{duration: 500 },{complete:done})
        Velocity(el,"slideUp", {duration: 500 },{complete:done});
      },
  }
}
</script>

<style>
  /*样式重置化*/
  body,div,dl,dt,dd,ul,li,h1,h2,h3,h4,h5,h6,p,span,em,i,a,input,form,label,nav,hr,ol{ margin: 0px; padding: 0px;};
  li{list-style: none;}
  a{ text-decoration: none;color: black; outline: 0 none;}
  em,i{ font-style: normal;}
  input{ outline:0 none;}
  img{ vertical-align: top; outline: 0 none;}
  textarea,button{ outline: 0 none;}
  body {
    font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    font-family: "微软雅黑";
    min-width: 1200px;
  }
  /*清浮动样式*/
  .outer {zoom:1;}    /*==for IE6/7 Maxthon2==*/
  .outer:after {clear:both;content:'';display:block;width: 0;height: 0;visibility:hidden;}
  /*去掉一些样式*/
  input[type='number'] {-moz-appearance:textfield;}
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {-webkit-appearance: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
   .app p{ display: flex; justify-content: center; align-items: center; margin: 20px auto;}
   .app p a{ padding: 10px 15px; border: 1px solid #000; border-radius: 6px; margin-right: 20px;}
   .app p a:nth-last-of-type(1){ margin-right: 0;}
   .app p a:hover{ background: deepskyblue; border-color: deepskyblue; color: #fff;}
   .app .router-link-exact-active{ background: deepskyblue; border-color: deepskyblue; color: #fff;}

</style>
