import Vue from 'vue'
import Vuex from 'vuex'
import initial from './initial.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

Vue.use(Vuex);

export default new Vuex.Store({
    initial,
    mutations,
    getters,
    actions
})