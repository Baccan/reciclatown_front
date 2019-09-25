<template>
  <div>
    <header>
      <div>
        <div id="title">
          <h1>Fornecedores</h1>
          <v-icon>local_shipping</v-icon>
        </div>

        <v-btn color="success" to="/fornecedores/add">Adicionar</v-btn>
      </div>
    </header>
    <div id="content">
      <v-simple-table id="table" dark fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">CNPJ</th>
              <th class="text-left">E-mail</th>
              <th class="text-left">Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
              @click="goToDetail(item)"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.cnpj }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.contactNumber }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    desserts: [
      {
        id: 1,
        name: "Fabrica de Lixo",
        cnpj: "37081916718",
        email: "fabrica@email.com",
        contactNumber: "(11) 2733-1220"
      }
    ]
  }),
  methods: {
    goToDetail(detail) {
      this.$router.push({
        name: "DetailFornecedores",
        params: { id: detail.id, detail }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* #0B0A0D - content */
/* #19181f - Menu */
/* #00af5e */
/* #006a39 */
/* #1c4a47 */
/* #1b2e28 */

header {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  div {
    width: 90%;
    display: flex;
    #title {
      display: flex;
      flex-direction: row;

      h1 {
        color: white;
      }
      i {
        color: #00af5e !important;
        margin-left: 10px;
      }
    }

    @media screen and (max-width: "400px") {
      flex-direction: column;
    }
  }
}

#content {
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  #table {
    width: 90% !important;
    tbody {
      tr {
        cursor: pointer;
        td {
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
