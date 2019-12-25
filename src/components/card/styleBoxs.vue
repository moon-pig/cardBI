<template>
    <div class="stylebox">
        <div  v-html="stcon"></div>
    </div>
</template>

<script>
    import '../../assets/css/tab.css'

    export default {
      name: "styleBox",
      props:["stcon"],
    }
</script>

<style scoped>

</style>
