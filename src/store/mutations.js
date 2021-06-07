export default {
    setAuth(state, payload){
      state.isAuthenticated = payload;
    },
    setUser(state, payload){
      state.user = payload;
    },
    setTemplate(state, payload) {
        state.template = payload;
    },
    setIsEntryAllowed(state, payload) {
      state.isEntryAllowed = payload;
    },
    setTagId(state, payload) {
      state.tagId = payload;
    }
  }