<template>
    <div class="styleCon">
      <div class="styleConScroll">
        <div class="styleConScrollNav">
          <ul class="cf">
            <li class="act">全部</li>
            <li>页眉页脚</li>
            <li>标题</li>
            <li>正文</li>
            <li>图文</li>
          </ul>
        </div>
        <div v-for="tab in tablist" @click="sendMyMsg(tab.tab)">
          <stylebox :stcon="tab.tab"></stylebox>
        </div>
      </div>

    </div>
</template>

<script>
    import stylebox from "./styleBox";
    export default {
        name: "styleComponent",
      components: {stylebox},
      data () {
        return {
          tablist:[{
            tab:"<div class=\"item-group-2\">\n" +
              "                    <div class=\"scontent\">\n" +
              "                        <div class=\"border-top\">\n" +
              "                            <ul>\n" +
              "                                <li></li>\n" +
              "                                <li></li>\n" +
              "                                <li></li>\n" +
              "                                <li></li>\n" +
              "                                <li></li>\n" +
              "                            </ul>\n" +
              "                        </div>\n" +
              "                        <div class=\"border-bottom\">\n" +
              "                            <ul>\n" +
              "                                <li></li>\n" +
              "                            </ul>\n" +
              "                        </div>\n" +
              "                        <div class=\"area\">\n" +
              "                            <p>这是一段描述话语…</p>\n" +
              "\n" +
              "                        </div>\n" +
              "                    </div>\n" +
              "                </div>"
          },{
            tab:"<div class=\"item-group-4\">\n" +
              "                    <div class=\"scontent\">\n" +
              "                        <div class=\"cl\"></div>\n" +
              "                        <div class=\"cr\"></div>\n" +
              "                        <div class=\"area\">\n" +
              "                            <p>这是一段描述话语…</p>\n" +
              "\n" +
              "                        </div>\n" +
              "                        <div class=\"border-bottom\">\n" +
              "                            <ul class=\"to\">\n" +
              "                                <li></li>\n" +
              "                                <li></li>\n" +
              "\n" +
              "                            </ul>\n" +
              "                            <span id=\"star-five\"></span>\n" +
              "                            <ul class=\"bo\">\n" +
              "                                <li></li>\n" +
              "                                <li></li>\n" +
              "                            </ul>\n" +
              "                        </div>\n" +
              "                    </div>\n" +
              "                </div>"
          }]
        }
      },

      mounted() {
        //this.vinit()
      },
      methods: {
        sendMyMsg(msg){
          this.$emit('childFn', msg);
        }
      }
    }
</script>

<style scoped>

</style>
