<template>
  <div>
    <header>
      <h1>Equipamentos</h1>
      <v-icon>build</v-icon>
    </header>
    <div id="content">
      <v-simple-table id="table" dark fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Tipo</th>
              <th class="text-left">Problema</th>
              <th class="text-left">Responsável</th>
              <th class="text-left">Telefone responsável</th>
              <th class="text-left">Data de retirada</th>
              <th class="text-left">Data de entrega</th>
              <th class="text-left">Local de retirada</th>
              <th class="text-left">Número</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>Lixeira</td>
              <td>{{ item.problem }}</td>
              <td>{{ item.owner }}</td>
              <td>{{ item.ownerContactNumber }}</td>
              <td>{{ item.pulloutDate }}</td>
              <td>{{ item.deliveryDate }}</td>
              <td>{{ item.place }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.stats }}</td>
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
        type: "Frozen Yogurt",
        problem: "Tampa não está abrindo",
        owner: "Gustavo Baccan",
        // ownerContactNumber: 1199123123,
        ownerContactNumber: "(11) 97743-8549",
        place: "Edificio Vila Boa",
        // pulloutDate: "2019-09-22 12:00:00",
        // deliveryDate: "2019-09-22 12:00:00",
        pulloutDate: "01/01/2019",
        deliveryDate: "01/01/2019",
        number: 159,
        stats: "Aberta"
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
