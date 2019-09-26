import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/auth/LogIn.vue")
    },
    {
      path: "/home",
      name: "Home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
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
      path: "/equipamentos/add",
      name: "AddEquipamentos",
      component: () =>
        import(
          /* webpackChunkName: "add-equipamentos" */ "./views/equipamentos/Add.vue"
        )
    },
    {
      path: "/equipamentos/:id",
      name: "DetailEquipamentos",
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "detail-equipamentos" */ "./views/equipamentos/Detail.vue"
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
