import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editormsg:{
      sindex:"",
      editorinfo:"",
      imginfo:"",
    }
  },
  mutations: {
    seteditor (state, editors) {
      state.editormsg.sindex = editors.editors.sindex
      state.editormsg.editorinfo = editors.editors.editorinfo
    },
    setimg (state, editors) {
      state.editormsg.sindex = editors.editors.sindex
      state.editormsg.imginfo = editors.editors.imginfo
      alert(JSON.stringify(state.editormsg.imginfo))
    },
  },
  /*
  这里是权限设置
  暂时写死的用户名及权限，如需打开需要
    actions: {
    requestUserInfo ({ commit }) {
      return requestUserInfo().then(user => {
        commit('setUser', { user })
      })
    }
  }
*/
  actions: {
    seteditor(context,editors){
      context.commit('seteditor',editors);
    },
    setimg(context,editors){

      context.commit('setimg',editors);
    }
  }
})
