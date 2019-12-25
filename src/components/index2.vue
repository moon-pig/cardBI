<template>
  <div style="height: 100%">
    <section>
      <iheader style="background:#283867 "  @childFnss="gopreview"></iheader>
    </section>

    <div class="insaside">
      <ul class="asidelist">
        <li class="active" @click="fnAddTextCon()">文字</li>
        <li @click="fnAddImgCon()">图片</li>
        <li @click="fnAddChartCon()">组件</li>
        <li @click="fnShowImgCon()">背景</li>
        <li @click="fnShowStyleCon()">样式</li>
      </ul>
    </div>
    <div class="content" style="background:#1F2A54 ">
      <div class="cardbgbigbox">
        <draggable v-model="carbgdata" :options="{animation:500,group:'people',}">
            <div class="cardbgsbox" v-for="(carbgs,index) in carbgdata">
              <div class="portlet-header">拖动</div>
              <!--<carbg :swidth="swidth" :sheight="sheight" :sbg="backgrounds" :editorcon="editorcon" :imgcount="imgcount" :chartdata="chartdata"></carbg>-->
              <carbg :swidth="swidth" :sheight="sheight" :sbg="backgrounds" :carbgdata="carbgs" :sindex="index" :cardcaneditor="cardcaneditor"></carbg>
            </div>
        </draggable>
      </div>

    </div>
    <div class="func" v-if="isCbgbox">
      <div class="title cf">页面背景设置
        <a href="javascript:" class="u-btn u-btn-whi-gra fr" @click="fnRset()">重置</a>
      </div>
      <div class="fbox">
        <div class="group cancho">
          页面背景类型
          <div class="change"><span :class="cbackgroundtype===0?'act':''"
                                    @click="fnChangeBackgroudType(0)">图片</span><span @click="fnChangeBackgroudType(1)"
                                                                                     :class="cbackgroundtype==1?'act':''">颜色</span>
          </div>
        </div>
        <div class="group" v-if="cbackgroundtype===0">
          页面背景图片
          <div class="change"><span class="photo flex-center"><img :src="backgroundsimg"
                                                                   v-if="backgroundsimg"> </span><span class="filebox">选择文件<input
            type="file" @change="getObjectURL($event)"/></span></div>
        </div>
        <div class="group cancho" v-if="cbackgroundtype===0">
          背景展现形式
          <div class="change">
            <span :class="bbackgroundtype==0?'act':''" @click="fnChangebBackgroudType(0)">平铺</span>
            <span :class="bbackgroundtype==1?'act':''" @click="fnChangebBackgroudType(1)">拉伸</span>
            <span :class="bbackgroundtype==2?'act':''" @click="fnChangebBackgroudType(2)">适应屏幕</span></div>
        </div>
        <div class="group" v-if="cbackgroundtype==1">
          页面背景类型
          <div class="bgtype cf">
            <span v-for="colorb in colorbox" :style="'background:'+colorb" @click="fnChangeBgColor(colorb)"></span>
          </div>
        </div>
      </div>
    </div>
    <StyleCon @childFn="parentFn" v-if="isCstyleBox"></StyleCon>
    <StyleCons @childFns="parentFns" v-if="isCstylesBox"></StyleCons>
  </div>
</template>

<script>
  import iheader from '../components/header.vue'
  import left1 from '../components/left1.vue'
  import ifooter from '../components/footer.vue'
  import Carbg from "./card/carbg"
  import StyleCon from "./card/styleCon";
  import StyleCons from "./card/styleCons";
  import draggable from 'vuedraggable'
  import { mapState } from 'vuex'

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
        cardcaneditor:true
      }
    },
    components: {StyleCon, Carbg, iheader, left1, ifooter, StyleCons,draggable},
    mounted() {
      this.flowEdit()
    },
    computed: {
      editormsg(){
        return this.$store.state.editormsg.editorinfo;
      },
      imgmsg(){
        return this.$store.state.editormsg.imginfo;
      }
    },
    watch:{
      editormsg(curval,oldval){   //监听了computed中getorderid的值，如果发生改变就触发console.log
        console.log(`最新值${curval}--旧值${oldval}`);
        let exindex_=this.$store.state.editormsg.sindex;

        this.carbgdata[exindex_].editorcon.info=curval
          console.log(JSON.stringify(this.carbgdata))
      },
      imgmsg(curval,oldval){   //监听了computed中getorderid的值，如果发生改变就触发console.log
        console.log(`最新值${curval}--旧值${oldval}`);
        let exindex_=this.$store.state.editormsg.sindex;
        this.carbgdata[exindex_].imgcount=curval
        console.log(JSON.stringify(this.carbgdata))
      }
    },
    methods: {
      parentFn(payload) {
        let editorcons = {}

        let msg = {}
        msg.info = payload
        editorcons.editorcon = ""
        editorcons.editorcon=msg
        this.carbgdata = this.carbgdata.concat(editorcons)
      },
      // parentFns(payload) {
      //     this.chartdata.push(payload)
      // },
      parentFns(payload) {
        let editorcons = {}
        editorcons.chartdata = ''
        editorcons.chartdata=payload
        this.carbgdata = this.carbgdata.concat(editorcons)
      },
      // fnAddTextCon(){
      //   let msg={info:'<strike>bbbbbbbbbb</strike>'}
      //   this.editorcon=this.editorcon.concat(msg)
      // },
      fnAddTextCon() {
        let editorcons = {}
        editorcons.editorcon = []

        let msg = {info: '<em>您可以输入文字</em>'}
        editorcons.editorcon=msg
        this.carbgdata = this.carbgdata.concat(editorcons)
      },
      // fnAddImgCon(){
      //   let count=this.imgcount.length;
      //   this.imgcount=this.imgcount.concat(count)
      // },
      fnAddImgCon() {
        let editorcons = {}
        editorcons.imgcount = ""
        let count = require("../assets/images/imgbox.png") ;
        editorcons.imgcount=count
        this.carbgdata = this.carbgdata.concat(editorcons)
      },
      fnShowImgCon() {
        this.isCstyleBox = false;
        this.isCbgbox = this.isCbgbox ? false : true
      },
      fnAddChartCon() {
        this.isCstyleBox = false;
        this.isCbgbox = false;
        this.isCstylesBox = this.isCstylesBox ? false : true
      },
      fnChangeBackgroudType(index) {
        if (index == 0 && (this.cbackgroundtype === "" || this.backgrounds.length < 20)) {
          this.backgroundsimg = require("../assets/images/bg.png")
        }
        this.cbackgroundtype = index
        this.fnChangeBackAll()
      },
      fnChangebBackgroudType(index) {
        this.bbackgroundtype = index
        this.fnChangeBackAll()
      },
      getObjectURL: function (e) {
        let file = e.target.files[0];
        let url = '';
        var reader = new FileReader();
        reader.readAsDataURL(file);
        let that = this;
        reader.onload = function (e) {
          url = this.result.substring(this.result.indexOf(',') + 1);
          that.backgroundsimg = 'data:image/png;base64,' + url
          // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
          that.fnChangeBackAll()
        }
      },
      fnChangeBgColor(bgcl) {
        let bginfo = "";
        bginfo = "background:" + bgcl
        this.backgrounds = bginfo
      },
      fnChangeBackAll() {
        let bginfo = "";
        if (this.cbackgroundtype == 0) {
          bginfo += "background-image:url(" + this.backgroundsimg + ");";
          if (this.bbackgroundtype == 0) {
            bginfo += "background-repeat:repeat;"
          } else if (this.bbackgroundtype == 1) {
            bginfo += "background-size:100% 100%;"
          } else {
            bginfo += "background-size:100% auto;"
            bginfo += "background-position: center;"
          }
        } else if (this.cbackgroundtype == 1) {
          bginfo = "background:#fff"
        }
        this.backgrounds = bginfo
      },
      fnShowStyleCon() {
        this.isCbgbox = false;
        this.isCstyleBox = this.isCstyleBox ? false : true
      },
      fnRset() {
        this.cbackgroundtype = "";
        this.bbackgroundtype = 0;
        this.backgroundsimg = "";
        this.backgrounds = "background:#fff";
      },
      flowEdit: function () {
        // 此处是等到jquery加载上再去运行jquery-ui
        $(document).ready(function () {
          $('.cardbgsbox').sortable({
            connectWith: ".cardbgsbox",
            handle: ".portlet-header",
            placeholder: "place"
          })
        });

      },
      gopreview(){
        this.$router.push({
          name: 'preview',
          params: {
            carbgdata:this.carbgdata
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
