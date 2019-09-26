<template>
  <div>
    <header>
      <div id="titulo">
        <h1>Editar ordem de manutenção</h1>
        <v-icon>build</v-icon>
      </div>
      <h2>Número de identificação: {{ detail.id }}</h2>
    </header>
    <div id="content">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="detail.numeroEquipamento"
                :rules="numeroEquipamentoRules"
                label="Número do equipamento"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                dark
                v-model="detail.problemaReportado"
                :rules="problemaReportadoRules"
                label="Problema reportado"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="detail.telefoneResponsavel"
                :rules="telefoneResponsavelRules"
                label="Telefone do responsável"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                dark
                v-model="detail.responsavelEquipamento"
                :rules="responsavelEquipamentoRules"
                label="Responsável pelo equipamento"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="detail.datahoraRetirada"
                :rules="datahoraRetiradaRules"
                label="Data de retirada"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="detail.dataHoraEntrega"
                :rules="dataHoraEntregaRules"
                label="Data de retirada"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="detail.localDeRetirada"
                :rules="localDeRetiradaRules"
                label="Local de retirada"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-btn block color="error" class="mr-4" @click="reset">
                Limpar
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn block color="success" class="mr-4" @click="validate">
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["detail"],

  data: () => ({
    valid: false,
    // numeroEquipamento: "",
    numeroEquipamentoRules: [v => !!v || "Número do equipamento é obrigatório"],

    // problemaReportado: "",
    problemaReportadoRules: [v => !!v || "Problema reportado é obrigatório"],

    // localDeRetirada: "",
    localDeRetiradaRules: [v => !!v || "Local de Retirada é obrigatório"],

    // responsavelEquipamento: "",
    responsavelEquipamentoRules: [
      v => !!v || "Responsável pelo equipamento é obrigatório"
    ],

    // datahoraRetirada: "",
    datahoraRetiradaRules: [v => !!v || "Data de retirada é obrigatória"],

    // dataHoraEntrega: "",
    dataHoraEntregaRules: [v => !!v || "Data de entrega é obrigatória"],

    // telefoneResponsavel: "",
    telefoneResponsavelRules: [
      v => !!v || "Telefone do responsável é obrigatório"
    ]
  }),

  created() {
    if (this.detail === undefined) {
      this.$router.push("/equipamentos");
    }
  },

  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        await axios
          .put(`http://18.217.149.81:10002/ordens_manutencao`, {
            id: this.detail.id,
            numeroEquipamento: this.detail.numeroEquipamento,
            problemaReportado: this.detail.problemaReportado,
            localDeRetirada: this.detail.localDeRetirada,
            responsavelEquipamento: this.detail.responsavelEquipamento,
            datahoraRetirada: this.detail.datahoraRetirada,
            dataHoraEntrega: this.detail.dataHoraEntrega,
            telefoneResponsavel: this.detail.telefoneResponsavel,
            statusOrdem: "Em Análise"
          })
          .then(response => {
            console.log(response.data);
            this.$router.push("/equipamentos");
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
      }
    },
    reset() {
      this.$refs.form.reset();
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
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  h1,
  h2 {
    color: white;
  }
  #titulo {
    display: flex;
    i {
      color: #00af5e !important;
      margin-left: 10px;
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
