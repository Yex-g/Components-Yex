import Vue from 'vue'
import Vuex from 'vuex'

import child from './children'
Vue.use(Vuex)
const test2 = {
  // 当namespaced=true 时， vuex, 将会自动给各自module 添加访问路径名。 方便区分moduel
  namespaced: true,
  state:{
    name: 'moduleB',
    type: 'module B'
  },
  mutations: {
    updateNameByMutation(state, appendStr){
      state.name = state.name + " append Str: " + appendStr
    }
  },
  actions: {
    // 如果不使用命名空间， 那么view 指向actions 的该方法时，会执行所有与指定action名相同的函数（即：这里module A,B 中该action都会执行）
    udpateNameByAction({commit}, appendStr){
      commit("updateNameByMutation", appendStr)
    }
  },
  getters: {
    getNameB(state){
      return state.name
    }
  }
}
export default new Vuex.Store({
  state: {
    name: 'i am root state name'
  },
  modules:{
   // 这里的路径名： test1, test2, 在view 中 通过 mapActions('test1', [actionName]) 使用并区分需要使用的module
   child,
   test2
  }
})



