<template>
    <div>
      <div class="intab">
        <span :class="bindact==0?'act':''" @click="changetype(0)">全部</span>
        <span :class="bindact==1?'act':''" @click="changetype(1)">我创建的</span>
      </div>
      <incslist intype="card" :cardtype="bindact" :spagetag="pagetag"></incslist>
    </div>
</template>

<script>
    import Incslist from "./incslist";
    export default {
        name: "inlistbox",
      components: {Incslist},
      data () {
        return {
          bindact:0,
        }
      },
      props:["pagetag"],
      mounted(){

      },
      methods: {
        changetype(vtype){
          this.bindact=vtype
        }
      }
    }
</script>

<style scoped>

</style>
