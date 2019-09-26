<template>
  <div>
    <header>
      <div>
        <div id="title">
          <h1>Equipamentos</h1>
          <v-icon>build</v-icon>
        </div>

        <v-btn color="success" to="/equipamentos/add">Adicionar ordem</v-btn>
      </div>
    </header>
    <div id="content">
      <v-simple-table id="table" dark fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <!-- <th class="text-left">Tipo</th> -->
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
            <tr
              v-for="item in equipamentos"
              :key="item.name"
              @click="goToDetail(item)"
            >
              <!-- <td>Lixeira</td> -->
              <td>{{ item.problemaReportado }}</td>
              <td>{{ item.responsavelEquipamento }}</td>
              <td>{{ item.telefoneResponsavel }}</td>
              <td>{{ item.datahoraRetirada }}</td>
              <td>{{ item.dataHoraEntrega }}</td>
              <td>{{ item.localDeRetirada }}</td>
              <td>{{ item.numeroEquipamento }}</td>
              <td>{{ item.statusOrdem }}</td>
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
    equipamentos: [{}]
    // desserts: [
    //   {
    //     id: 1,
    //     // tipo: "Lixeira",
    //     problemaReportado: "Tampa não está abrindo",
    //     responsavelEquipamento: "Gustavo Baccan",
    //     // ownerContactNumber: 1199123123,
    //     telefoneResponsavel: "(11) 97743-8549",
    //     localDeRetirada: "Edificio Vila Boa",
    //     // pulloutDate: "2019-09-22 12:00:00",
    //     // deliveryDate: "2019-09-22 12:00:00",
    //     datahoraRetirada: "01/01/2019",
    //     dataHoraEntrega: "01/01/2019",
    //     numeroEquipamento: 159,
    //     statusOrdem: "Aberta"
    //   }
    // ]
  }),
  mounted() {
    this.getEquipamentos();
  },
  methods: {
    async getEquipamentos() {
      axios
        .get(
          "http://ec2-3-14-152-46.us-east-2.compute.amazonaws.com:10002/ordens_manutencao"
        )
        .then(response => {
          this.equipamentos = response.data;
          console.log(this.equipamentos);
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
        name: "DetailEquipamentos",
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

    @media screen and (max-width: "500px") {
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
