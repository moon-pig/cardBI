<template>
  <section class="container">
    <article>
      <div class="editors" :contenteditable="cardcaneditor" v-html="ediortext" @blur="vinput($event)">

      </div>
    </article>
  </section>
</template>

<script>
  import '../../../static/scripts/jquery.popline.js'
  import '../../../static/scripts/plugins/jquery.popline.decoration.js'
  import '../../../static/scripts/plugins/jquery.popline.list.js'
  import '../../../static/scripts/plugins/jquery.popline.justify.js'
  import '../../../static/scripts/plugins/jquery.popline.blockformat.js'
  import '../../../static/scripts/plugins/jquery.popline.social.js'
  import '../../../static/scripts/plugins/jquery.popline.backcolor.js'
  import '../../../static/css/normalize.css'
  import '../../../static/css/toggle-switch.css'
  import '../../../static/themes/default.css'
  import '../../../static/css/page.css'



export default {

  props:["ediortext","sindex","cardcaneditor"],
  name: 'editor',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      canedit:''
    }
  },

  mounted() {
    this.vinit()
  },
  methods: {
    vinit() {
      $(function () {
        document.execCommand('defaultParagraphSeparator', false, 'p');
        setTimeout(function () {
          $(".editors").popline();
        },1000)

      })
    },
    vinput($event){
      this.canedit=$event.target.innerHTML
      let editors={}
      editors.sindex=this.sindex;
      editors.editorinfo=this.canedit
      this.$store.dispatch({
        type: 'seteditor',
        editors: editors
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
