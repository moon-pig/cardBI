<template>
  <div class="l-box">
    <div class="icbox-top">{{cardname}}</div>
    <ul class="icbox-con cf">
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
      <li><a>香港法律体系</a></li>
    </ul>
    <div class="icbox-more">
      <router-link :to="towhere">查看更多></router-link>
    </div>
    <div class="icbot">
      <router-link :to="towhere">{{bottext}}</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexcardbox",
      data () {
        return {
          cardname:"",
          visible: false,
          towhere:'',
          bottext:'',
        }
      },
      props:["cardtype"],
      mounted(){
        this.initlist()

      },
      methods: {
        initlist(){
          if(this.cardtype==0){
            this.cardname='知识卡片';
            this.towhere='/content2';
            this.bottext='新建卡片';
          }else{
            this.cardname='专题页';
            this.towhere='/content3';
            this.bottext='新建专题';
          }

        },
      }
    }
</script>

<style scoped>

</style>
