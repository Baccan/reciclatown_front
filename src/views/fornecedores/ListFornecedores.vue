<template>
  <div>
    <header>
      <h1>Fornecedores</h1>
      <v-icon>local_shipping</v-icon>
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
            <tr v-for="item in desserts" :key="item.name">
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
        name: "Fabrica de Lixo",
        cnpj: "37081916718",
        email: "fabrica@email.com",
        contactNumber: "(11) 2733-1220"
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

header {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  h1 {
    color: white;
  }
  i {
    color: #00af5e !important;
    margin-left: 10px;
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
