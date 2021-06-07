<template>
  <div class="portal-container">
    <div class="portal-type__container">
      <div class="portal-type__sidebar">
        <Sidebar />
      </div>
      <div class="portal-type__main-container">
        <div class="portal-type__inner-container">
          <span class="user-admin__title">Are you an USER or ADMIN?</span>
          <div class="cards-list">
            <div class="row">
              <div
                class="card"
                @click="handleUserType('user')"
                :style="{ border: 'none', backgroundColor: '#fff' }"
              >
                <img
                  :src="require('@/assets/static/auth/user.svg')"
                  alt="User"
                />
                <span class="card__usertype">USER</span>
              </div>
              <div
                class="card"
                :style="{ border: 'none', backgroundColor: '#fff' }"
                @click="handleUserType('agent')"
              >
                <img
                  :src="require('@/assets/static/auth/agent.svg')"
                  alt="Agent"
                />
                <span class="card__usertype">ADMIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { mapActions } from "vuex";
export default {
  components: {
    Sidebar,
  },
  methods: {
    handleUserType(userType) {
      localStorage.setItem("card-userType", userType);
      this.changeTemplate(userType);
      this.$router.push("portals/user-id");
    },
    ...mapActions(["changeTemplate"]),
  },
};
</script>
<style lang="scss">
.portal-container {
  width: 100vw;
  height: 100%;
  background-color: #fff;
  padding: 30px;
  display: flex;
  .cards-list {
    margin-left: 75px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }
  .user-admin__title {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-weight: 500;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .card__usertype {
      font-weight: 500;
      font-size: 24px;
      margin-top: 10px;
    }
  }
}
</style>
