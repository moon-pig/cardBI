<template>
  <div style="height: 100%">
    <section>
      <iheader></iheader>
    </section>

    <aside>
      <left1></left1>
    </aside>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import iheader from '../components/header.vue'
    import left1 from '../components/left1.vue'
    import ifooter from '../components/footer.vue'
    export default {
      name: "index1",
      data () {
        return {

        }
      },
      components: {iheader,left1,ifooter},
      mounted(){


      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
