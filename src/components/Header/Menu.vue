<template>
  <div>
    <v-navigation-drawer dark v-model="drawer" app clipped id="nav-drawer">
      <v-list dense>
        <v-list-item
          :to="item.route"
          v-for="item in menuItems"
          :key="item.title"
        >
          <v-list-item-action>
            <v-icon id="icon">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark app clipped-left id="navbar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ReciclaTown</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Sair <v-icon>logout</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    menuItems: [
      {
        title: "Início",
        icon: "home",
        route: "/"
      },
      {
        title: "Funcionários",
        icon: "people",
        route: "/funcionarios"
      },
      {
        title: "Equipamentos",
        icon: "build",
        route: "/equipamentos"
      },
      {
        title: "Fornecedores",
        icon: "local_shipping",
        route: "/fornecedores"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
/* #0B0A0D - content */
/* #19181f - Menu */
/* #00af5e */
/* #006a39 */
/* #1c4a47 */
/* #1b2e28 */

#nav-drawer,
#navbar {
  background: #19181f;
}

.v-list .v-list-item--active .v-icon {
  color: #00af5e;
}
</style>
