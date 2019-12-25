<template>
  <div class="flex-center maxwidthbox">
    <section class="container">
        <div class="cimgbox flex-center">
          <img :src="imgsrc">
          <input @change="getObjectURL($event)" type="file" v-if="cardcaneditor"/>
        </div>
    </section>
  </div>
</template>
<script>
  import 'jquery-ui/ui/widgets/sortable'
  import 'jquery-ui/ui/widgets/resizable'
  export default {
    name: "changeimg",
    props:["cardcaneditor","sindex","imgboxc"],
    watch:{
      'imgboxc':{
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
        canedit:'',
        imgsrc:'',
      }
    },
    computed: {
      key() {
        return this.$route.path
      }
    },
    mounted: function() {
      this.flowEdit()
      this.vinit()
    },
    methods: {
      vinit(){
        this.imgsrc=this.imgboxc
      },
      flowEdit: function() {
        // 此处是等到jquery加载上再去运行jquery-ui
        var maxwidth=$(".maxwidthbox").width();
        // $(document).ready(function() {
        //   $('.cimgbox').resizable({
        //     maxWidth: maxwidth-20,
        //   })
        // });

      },
       getObjectURL:function(e) {
         let file=e.target.files[0];
         let url='';
         var reader = new FileReader();
         reader.readAsDataURL(file);
         let that=this;
         reader.onload = function (e) {
           url=this.result.substring(this.result.indexOf(',')+1);
           let imgurl='data:image/png;base64,'+url
           that.imgsrc=imgurl
           // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
           let editors={}
           editors.sindex=that.sindex;
           editors.imginfo=imgurl
           that.$store.dispatch({
             type: 'setimg',
             editors: editors
           });
         }
      }

    }
  }
</script>

<style scoped>

</style>
