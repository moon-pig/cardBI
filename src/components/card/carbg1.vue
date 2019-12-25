<template>
    <div :style="'width:'+swidth+'px;height:'+sheight+'px;'+bgimg+';'" class="cardgbox">
      <editor v-for="(ediortext,index) in canedit" :ediortext="ediortext.info" :key="index"></editor>
      <div>
        <changeimg v-for="(imgbox,index) in imgboxc" :key="index+'b'"></changeimg>
      </div>
      <div v-for="(sdata,index) in chartdatas" :key="index+'c'" class="container">
        <div class="portlet-header">拖动</div>
        <ve-line :data="sdata.sdata" v-if="sdata.type=='line'"></ve-line>
        <ve-histogram :data="sdata.sdata" v-if="sdata.type=='bar'"></ve-histogram>
      </div>
    </div>
</template>

<script>
  import 'jquery-ui/ui/widgets/sortable'
  import 'jquery-ui/ui/widgets/resizable'
  import Editor from "./editor";
  import Changeimg from "./changeimg";
    export default {
        name: "carbg",
      components: {Changeimg, Editor},
      props:["swidth","sheight","sbg","editorcon","imgcount","chartdata"],
      watch:{
        'editorcon':{
          handler(newValue,oldValue){
            this.vinit()
          },
          deep:true //深度监听
        },
        'imgcount':{
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
        'chartdata':{
          handler(newValue,oldValue){
            this.vinit()
          },
          deep:true //深度监听
        }
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
          chartdatas:[]
        }
      },
      computed: {
        key() {
          return this.$route.path
        }
      },
      mounted: function() {
        this.vinit()
        this.flowEdit()
      },
      methods: {
        vinit(){
          this.canedit=this.editorcon;
          this.imgboxc=this.imgcount;
          this.bgimg=this.sbg;
          this.chartdatas=this.chartdata
        },
        flowEdit: function() {
          // 此处是等到jquery加载上再去运行jquery-ui
          $(document).ready(function() {
            $('.cardgbox').sortable({
                connectWith: ".cardgbox",
                handle: ".portlet-header",
                placeholder: "place"
              })
          });

        }
      }
    }
</script>

<style scoped>

</style>
