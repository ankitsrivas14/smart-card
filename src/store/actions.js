
import firebase from 'firebase/app'
import router from '../router'

export default {
    checkAuth(context){
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          context.commit('setAuth', true);
          context.commit('setUser', user);
          let userSplit = user.l.split('');
          let tagId = [];
          userSplit.forEach((el, i) => {
            if (i % 6 === 0) {
              tagId.push('-');
              tagId.push(el);
            }
            else {
              tagId.push(el);
            }
          })
          context.commit('setTagId', tagId.join('').slice(1, 28));
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
    },
    changeTemplate(context, userType) {
        context.commit('setTemplate', userType);
    },
    setIsEntryAllowed(context, access) {
      context.commit('setIsEntryAllowed', access);
    }
  }