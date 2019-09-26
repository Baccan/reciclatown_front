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
      <v-simple-table id="table" dark fixed-header loading>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">CNPJ</th>
              <th class="text-left">E-mail</th>
              <th class="text-left">Telefone</th>
              <th class="text-center">Editar</th>
              <th class="text-center">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in fornecedores" :key="item.name">
              <template
                v-if="item.nome || item.cpfCnpj || item.email || item.telefone"
              >
                <td>{{ item.nome }}</td>
                <td>{{ item.cpfCnpj }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.telefone }}</td>
                <td class="text-center">
                  <v-btn @click="goToDetail(item)" color="success"
                    ><v-icon>edit</v-icon></v-btn
                  >
                </td>
                <td class="text-center">
                  <v-btn @click="deleteFornecedores(item.id)" color="error"
                    ><v-icon>delete</v-icon></v-btn
                  >
                </td>
              </template>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    fornecedores: [{}]
  }),
  mounted() {
    this.getFornecedores();
  },
  methods: {
    async getFornecedores() {
      axios
        .get("http://18.217.149.81:10000/fornecedores")
        .then(response => {
          this.fornecedores = response.data;
          console.log(this.fornecedores);
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
          console.log(error.config);
        });
    },
    async deleteFornecedores(id) {
      axios
        .delete(`http://18.217.149.81:10000/fornecedores/${id}`)
        .then(response => {
          this.getFornecedores();
          console.log(response);
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
          console.log(error.config);
        });
    },
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
