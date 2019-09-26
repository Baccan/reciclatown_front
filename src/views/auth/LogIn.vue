<template>
  <div>
    <div id="content">
      <div id="login-form">
        <header>
          <h1>ReciclaTown</h1>
        </header>
        <v-form>
          <v-text-field
            label="Login"
            name="login"
            prepend-icon="person"
            type="text"
            dark
          ></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            dark
          ></v-text-field>

          <v-btn block color="success" to="/home">Login</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss" scoped>
#content {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #login-form {
    padding: 30px;
    border-radius: 15px;
    background: #19181f;
    h1 {
      text-align: center;
      color: white;
    }
  }
}
</style>
