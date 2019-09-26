<template>
  <div>
    <header>
      <div>
        <div id="title">
          <h1>Funcionarios</h1>
          <v-icon>people</v-icon>
        </div>
      </div>
    </header>
    <div id="content">
      <v-simple-table id="table" dark fixed-header loading>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">rm</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in funcionarios" :key="item.name">
              <td>{{ item.nome }}</td>
              <td>{{ item.rm }}</td>
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
    funcionarios: [
      {
        nome: "Carlos Vinicios",
        rm: 332579
      },
      {
        nome: "Gabriel Souza",
        rm: 332295
      },
      {
        nome: "Gustavo Baccan",
        rm: 332824
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
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
