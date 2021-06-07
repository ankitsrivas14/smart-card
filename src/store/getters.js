export default {
    email(state){
      return state.user ? state.user.email : null;
    },
    name(state){
      return state.user ? state.user.displayName : null;
    },
    isAuth(state){
      return state.isAuthenticated;
    },
    template(state) {
        return state.template;
    },
    isEntryAllowed(state) {
      return state.isEntryAllowed;
    },
    getTagId(state) {
      return state.tagId;
    }
  }