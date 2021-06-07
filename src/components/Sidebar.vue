<template>
  <div class="portal-sidebar">
    <ul>
      <span class="sidebar-heading">DEPARTMENTS</span>
      <router-link
        :to="route.to"
        v-for="route in routes"
        :key="route.id + route.value"
        disabled
      >
        <li>
          <span class="sidebar-icon"
            ><font-awesome-icon :icon="route.icon"
          /></span>
          {{ route.label }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      routes: [
        {
          id: "1",
          label: "User Identification",
          value: "user-identification",
          to: "/portals/user-id",
          icon: "users",
        },
        {
          id: "2",
          label: "Transport",
          value: "transport",
          to: "/portals/transport",
          icon: "bus",
        },
        {
          id: "3",
          label: "Healthcare",
          value: "healthcare",
          to: "/portals/health",
          icon: "heartbeat",
        },
        {
          id: "4",
          label: "Ration",
          value: "ration",
          to: "/portals/ration",
          icon: "bread-slice",
        },
        {
          id: "5",
          label: "Banks",
          value: "banks",
          to: "/portals/banks",
          icon: "university",
        },
        {
          id: "6",
          label: "Transactions",
          value: "transactions",
          to: "/portals/transactions",
          icon: "coins",
        },
        {
          id: "7",
          label: "Electricity",
          value: "electricity",
          to: "/portals/electricity",
          icon: "lightbulb",
        },
        {
          id: "8",
          label: "QR Code",
          value: "qr-code",
          to: "/portals/qrcode",
          icon: "qrcode",
        },
      ],
    };
  },
  computed: {
    getBackgroundColor() {
      if (this.template === "user") {
        return "#ffd858";
      }
      return "#85bffd";
    },
    ...mapGetters(["template"]),
  },
};
</script>

<style lang="scss">
.portal-sidebar {
  width: 300px;
  height: 475px;
  background-color: #f5f5f5;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding-top: 14px;
  ul {
    list-style-type: none;
    .sidebar-heading {
      font-size: 22px;
      display: flex;
      margin-bottom: 20px;
    }
    a,
    a:visited,
    a:active {
      text-decoration: none;
      color: #000000;
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      .sidebar-icon {
        margin-right: 15px;
      }
      li {
        padding: 10px 15px;
      }
    }
    .router-link-exact-active {
      li {
        background-color: #ffd858;
      }
    }
  }
}
</style>
