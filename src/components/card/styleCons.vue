<template>
    <div class="styleCon">
      <div class="styleConScroll">
        <div class="styleConScrollNav">
          <ul class="cf">
            <li class="act">全部</li>
            <li>页眉页脚</li>
            <li>标题</li>
            <li>正文</li>
            <li>图文</li>
          </ul>
        </div>
        <div v-for="tab in tablist" @click="sendMyMsg(tab.type)">
          <div class="chartsBox">
            <img :src="tab.tab">
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "styleComponent",
      data () {
        return {
          tablist:[{
            tab:"http://tushuo.baidu.com/dt-ui/asset201901086/common/core/img/addChart/line11.png",
            type:'line'
          },{
            tab:"http://tushuo.baidu.com/dt-ui/asset201901086/common/core/img/addChart/bar1.png",
            type:'bar'
          }],
          sdata:{
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
              { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
              { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
              { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
              { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
              { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
          }
        }
      },

      mounted() {
        //this.vinit()
      },
      methods: {
        sendMyMsg(type){
          let msg={}
          msg.sdata=this.sdata
          msg.type=type
          this.$emit('childFns', msg);
        }
      }
    }
</script>

<style scoped>

</style>
