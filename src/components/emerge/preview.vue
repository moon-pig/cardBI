<template>
  <div style="height: 100%">
    <section>
      <iheader style="background:#283867 "></iheader>
    </section>
    <div class="content" style="background:#1F2A54 ">
      <div class="cardbgbigbox ">

            <div class="cardbgsbox noline" v-for="(carbgs,index) in carbgdata">
              <!--<carbg :swidth="swidth" :sheight="sheight" :sbg="backgrounds" :editorcon="editorcon" :imgcount="imgcount" :chartdata="chartdata"></carbg>-->
              <carbg :swidth="swidth" :sheight="sheight" :sbg="backgrounds" :carbgdata="carbgs" :sindex="index"></carbg>
            </div>

      </div>
    </div>
  </div>
</template>

<script>
  import iheader from '../../components/header.vue'
  import left1 from '../../components/left1.vue'
  import Carbg from "../card/carbg"

  export default {
    name: "index1",
    data() {
      return {
        swidth: 600,
        sheight: 848,
        isCbgbox: false,
        isCstyleBox: false,
        isCstylesBox: false,
        cbackgroundtype: "",
        bbackgroundtype: 0,
        backgroundsimg: "",
        backgrounds: "background:#fff",
        colorbox: ["#fff", "#ddd", "#bbb", "#999", "#777", "#555", "#333", "#111", "#000"],
        chartdata: [],
        carbgdata: [],
        cardcaneditor:false
      }
    },
    components: { Carbg, iheader, left1,},
    mounted() {
      this.vinit()
    },
    methods: {
      vinit(){
        this.carbgdata=this.$route.params.carbgdata
      }
    }
  }
</script>

<style scoped>

</style>
