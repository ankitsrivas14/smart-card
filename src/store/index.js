import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'

import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null,
  },
  getters: {
    email(state){
      return state.user ? state.user.email : null;
    },
    isAuth(state){
      return state.isAuthenticated;
    }
  },
  mutations: {
    setAuth(state, payload){
      state.isAuthenticated = payload;
    },
    setUser(state, payload){
      state.user = payload;
    }
  },
  actions: {
    checkAuth(context){
      firebase.auth().onAuthStateChanged(function(user){
        console.log("User is => ", user);
        if(user){
          console.log('User => ',user);
          context.commit('setAuth', true);
          context.commit('setUser', user);
        }
        else{
          context.commit('setAuth', false);
          context.commit('setUser', null);
        }
      })
    },
    logout(){
      firebase.auth().signOut(); // After signout checkAuth will be called authomatically as it has onAuthStateShanged
      router.replace('/signin'); // Sending the user to SignIn page
    }
  }
})
