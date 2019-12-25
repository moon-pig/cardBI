<template>
    <div>
      <div class="searchbox">
        <input />
        {{cardtype+spagetag}}

        <a href="javascrpit:;" class="u-btn u-btn-imp">查询</a>
        <router-link to="/editorcon" class="u-btn u-btn-whi-blu">新增</router-link>
        <!--<a href="javascrpit:;" class="u-btn u-btn-whi-blu"  @click="dialogFormVisible = true">新增</a>-->
      </div>
      <div class="sortbox">
        <span>最热↑</span>
        <span>最新↑</span>
      </div>
      <ul class="incardlist cf">
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
        <li>
          <div class="imgbox"></div>
          <div class="tt f-cut">【ZLS-001】《反对逃犯条例》修订草案运动</div>
        </li>
      </ul>
      <el-dialog title="新建" :visible.sync="dialogFormVisible" style="text-align: center">

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "incslist",
        props:["cardtype","spagetag"],
        data () {
          return {
            bindact:0,
            dialogFormVisible:false
          }
        },
        watch:{
          spagetag:{
            handler(newValue,oldValue){
              this.vinit()
            },
            deep:true //深度监听
          },
          cardtype:{
            handler(newValue,oldValue){
              this.vinit()
            },
            deep:true //深度监听
          },
        },
        mounted(){
          this.vinit()
        },
        methods: {
          vinit(){

          }
        }
    }
</script>

<style scoped>

</style>
