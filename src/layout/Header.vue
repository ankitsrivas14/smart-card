<template>
  <div>
    <div class="header" :style="{ backgroundColor: getHeaderColor }">
      <div class="app-logo">
        <img :src="require('@/assets/static/header/logo.svg')" alt="App Logo" />
      </div>
      <div class="header-menu">
        <router-link to="/" exact="">Home</router-link>
        <template v-if="!isAuth">
          <router-link to="/signin">Sign In</router-link> |
          <router-link to="/signup">Sign Up</router-link>
        </template>
        <template v-else>
          <router-link to="/portals">Portals</router-link>
          <span @click="handleLogout" class="signout-btn">Sign Out</span>
        </template>
      </div>
    </div>
    <div v-if="isAuth" class="header-user-data">Welcome back, {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    getHeaderColor() {
      if (this.template === "agent") {
        return "#5aaaff";
      }
      return "#ffd858";
    },
    ...mapGetters(["isAuth", "name", "template"]),
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("card-userType");
      this.changeTemplate("user");
      this.logout();
    },
    ...mapActions(["logout", "changeTemplate"]),
  },
};
</script>
<style lang="scss">
.header {
  width: 100vw;
  height: 58px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  .app-logo {
    margin-top: 8px;
    img {
      width: 248px;
      height: 54px;
    }
  }
  .header-menu {
    a,
    .signout-btn {
      text-decoration: none;
      color: #404040;
      width: 113px;
      height: 47px;
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 4px;
    }
    .signout-btn {
      cursor: pointer;
    }
    .router-link-active {
      background-color: #f5f5f5;
    }
  }
}
.header-user-data {
  height: 25px;
  width: 100vw;
  background-color: #f5f5f5;
  padding-right: 70px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border-bottom: 1px solid #e6e4e4;
}
</style>
