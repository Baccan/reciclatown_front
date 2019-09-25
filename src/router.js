import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/funcionarios",
      name: "ListFuncionarios",
      component: () =>
        import(
          /* webpackChunkName: "funcioanrios" */ "./views/funcionarios/ListFuncionarios.vue"
        )
    },
    {
      path: "/equipamentos",
      name: "ListEquipamentos",
      component: () =>
        import(
          /* webpackChunkName: "equipamentos" */ "./views/equipamentos/ListEquipamentos.vue"
        )
    },
    {
      path: "/fornecedores",
      name: "ListFornecedores",
      component: () =>
        import(
          /* webpackChunkName: "fornecedores" */ "./views/fornecedores/ListFornecedores.vue"
        )
    },
    {
      path: "/fornecedores/add",
      name: "AddFornecedores",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "add-fornecedores" */ "./views/fornecedores/Add.vue"
        )
    },
    {
      path: "/fornecedores/:id",
      name: "DetailFornecedores",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "detail-fornecedores" */ "./views/fornecedores/Detail.vue"
        )
    }
  ]
});
