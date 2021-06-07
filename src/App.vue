<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(["checkAuth", "changeTemplate"]),
  },
  mounted() {
    this.checkAuth();
    if (localStorage.getItem("card-userType") === "agent") {
      this.changeTemplate("agent");
    } else {
      this.changeTemplate("user");
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "@/assets/css/general.scss";
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  display: flex;
  background-color: #f5f5f5;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
