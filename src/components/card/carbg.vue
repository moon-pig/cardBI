<template>
    <div :style="bgimg+';'" style="margin: 0 auto" class="cardbgbox">
      <editor :ediortext="canedit.info" :sindex="sindex_" :cardcaneditor="cardcaneditor" v-if="canedit"></editor>
      <div>
        <changeimg :imgboxc="imgboxc" :cardcaneditor="cardcaneditor" :sindex="sindex_" v-if="imgboxc"></changeimg>
      </div>
      <div v-if="chartdatas" class="container">
        <ve-line :data="chartdatas.sdata" v-if="chartdatas.type=='line'"></ve-line>
        <ve-histogram :data="chartdatas.sdata" v-if="chartdatas.type=='bar'"></ve-histogram>
      </div>
    </div>
</template>

<script>

  import Editor from "./editor";
  import Changeimg from "./changeimg";
  import 'jquery-ui/ui/widgets/sortable'
  import 'jquery-ui/ui/widgets/resizable'
    export default {
        name: "carbg",
      components: {Changeimg, Editor},
      props:["swidth","sheight","sbg","carbgdata","sindex","cardcaneditor"],
      watch:{
        'carbgdata':{
          handler(newValue,oldValue){
            this.vinit()
          },
          deep:true //深度监听
        },
        'sbg':{
          handler(newValue,oldValue){
            this.vinit()
          },
          deep:true //深度监听
        },
        'sindex':{
          handler(newValue,oldValue){
            this.vinit()
          },
          deep:true //深度监听
        },
      },
      // watch: {
      //   'dropdown.placement': {
      //     immediate: true,
      //     handler(val) {
      //       this.currentPlacement = val;
      //     }
      //   }
      // }
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          canedit:'',
          imgboxc:'',
          bgimg:'',
          chartdatas:'',
          sindex_:'',
        }
      },
      computed: {
        key() {
          return this.$route.path
        }
      },
      mounted: function() {
        this.vinit()

      },
      methods: {
        vinit(){

          this.canedit=this.carbgdata.editorcon;
          this.imgboxc=this.carbgdata.imgcount;
          this.bgimg=this.sbg;
          this.chartdatas=this.carbgdata.chartdata;
          this.sindex_=this.sindex
        },

      }
    }
</script>

<style scoped>

</style>
