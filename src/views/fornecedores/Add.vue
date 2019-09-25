<template>
  <div>
    <header>
      <h1>Adicionar Fornecedor</h1>
      <v-icon>local_shipping</v-icon>
    </header>
    <div id="content">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                dark
                v-model="name"
                :rules="nameRules"
                label="Nome"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="cnpj"
                :rules="cnpjRules"
                label="CNPJ"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                dark
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                dark
                v-model="contactNumber"
                :rules="contactNumberRules"
                label="Telefone"
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
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [v => !!v || "Name é obrigatório"],
    email: "",
    emailRules: [
      v => !!v || "E-mail é obrigatório",
      v => /.+@.+/.test(v) || "Deve ser um e-mail válido"
    ],
    cnpj: "",
    cnpjRules: [v => !!v || "CNPJ é obrigatório"],
    contactNumber: "",
    contactNumberRules: [v => !!v || "Telefone é obrigatório"]
  }),

  created() {},

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("hi");
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
