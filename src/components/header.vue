<template>
  <header>
    <div class="personal">
      <span @click="sendGo">预览</span><span><img src="../assets/images/defaultimg.jpg" alt=""></span><span>username</span>|<span>退出</span>
    </div>
  </header>
</template>

<script>
    export default {
        name: "header1",
      data () {
        return {}
      },

      mounted() {
        //this.vinit()
      },
      methods: {
        sendGo(){
          this.$emit('childFnss');
        }
      }
    }
</script>

<style scoped>

</style>
