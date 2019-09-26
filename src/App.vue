<template>
  <v-app>
    <Menu v-if="showMenu()" />

    <v-content id="content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Menu from "@/components/Header/Menu";

export default {
  name: "App",
  data: () => ({}),
  components: {
    Menu
  },
  methods: {
    showMenu() {
      if (this.$route.path === "/") return false;
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
#content {
  background: #0b0a0d;
}
</style>
