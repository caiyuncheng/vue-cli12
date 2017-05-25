<template>
    <div class="div1">
      <dl>
         单个计算属性:{{num1}}
         <button @click="btn1">add</button>
      </dl>
      <dl>
         <dt>循环计算属性</dt>
         <dd v-for="(val,idx) in num2" :kry="idx">
           {{val}}
           <button @click="btn2(idx)">add</button>
         </dd>
      </dl>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                num:0,
                nums:[{name:0},{name:1},{name:2},{name:3},{name:4}]
            }
        },
        computed:{//计算属性
            num1(){
                return "¥"+this.num+"元"
            },
            num2(){
                return this.nums.map(function (e) {
                    return "¥"+e.name+"元"
                });
            }
        },
        methods:{//所有函数使用
          btn1(){
              this.num++;
          },
          btn2(idx){
              this.nums[idx].name++;
          },
        }
    }
</script>


<style scoped>
   .div1 dl{ padding: 10px; letter-spacing: 4px;}
   .div1 dl button{ margin-left: 20px;}
   .div1 dl dd{ padding:20px 10px;}
</style>
