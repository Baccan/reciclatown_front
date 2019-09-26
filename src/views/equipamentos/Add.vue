<template>
  <div>
    <header>
      <h1>Adicionar ordem de manutenção</h1>
      <v-icon>build</v-icon>
    </header>
    <div id="content">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="numeroEquipamento"
                :rules="numeroEquipamentoRules"
                label="Número do equipamento"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                dark
                v-model="problemaReportado"
                :rules="problemaReportadoRules"
                label="Problema reportado"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="telefoneResponsavel"
                :rules="telefoneResponsavelRules"
                label="Telefone do responsável"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                dark
                v-model="responsavelEquipamento"
                :rules="responsavelEquipamentoRules"
                label="Responsável pelo equipamento"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="datahoraRetirada"
                :rules="datahoraRetiradaRules"
                label="Data de retirada"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="dataHoraEntrega"
                :rules="dataHoraEntregaRules"
                label="Data de retirada"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="localDeRetirada"
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
  data: () => ({
    // "numeroEquipamento":"009123",
    // "problemaReportado":"Tampa não está abrindo",
    // "localDeRetirada":"Edificio Vila Boa",
    // "responsavelEquipamento":"Gabriel",
    // "datahoraRetirada":"2019-09-22 12:00:00",
    // "dataHoraEntrega":"2019-09-28 12:00:00",
    // "telefoneResponsavel":"1199123123",
    // "statusOrdem":"Aberta"
    valid: false,
    numeroEquipamento: "",
    numeroEquipamentoRules: [v => !!v || "Número do equipamento é obrigatório"],

    problemaReportado: "",
    problemaReportadoRules: [v => !!v || "Problema reportado é obrigatório"],

    localDeRetirada: "",
    localDeRetiradaRules: [v => !!v || "Local de Retirada é obrigatório"],

    responsavelEquipamento: "",
    responsavelEquipamentoRules: [
      v => !!v || "Responsável pelo equipamento é obrigatório"
    ],

    datahoraRetirada: "",
    datahoraRetiradaRules: [v => !!v || "Data de retirada é obrigatória"],

    dataHoraEntrega: "",
    dataHoraEntregaRules: [v => !!v || "Data de entrega é obrigatória"],

    telefoneResponsavel: "",
    telefoneResponsavelRules: [
      v => !!v || "Telefone do responsável é obrigatório"
    ]
  }),

  created() {},

  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        await axios
          .post("http://18.217.149.81:10002/ordens_manutencao", {
            numeroEquipamento: this.numeroEquipamento,
            problemaReportado: this.problemaReportado,
            localDeRetirada: this.localDeRetirada,
            responsavelEquipamento: this.responsavelEquipamento,
            datahoraRetirada: this.datahoraRetirada,
            dataHoraEntrega: this.dataHoraEntrega,
            telefoneResponsavel: this.telefoneResponsavel,
            statusOrdem: "Aberta"
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
