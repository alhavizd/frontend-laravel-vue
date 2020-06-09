<template lang="html">
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="5" md="4">
        <v-card class="elevation-12 __b-20">
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="text-center">
                  <h3 class="headline">
                    Selamat Datang
                  </h3>
                  <h4 class="subtitle-1 mb-3">
                    Silahkan Login
                  </h4>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12" class="align-center">
                  <v-form>
                    <v-text-field v-model="form.email" label="Email" type="email" outlined dense />
                    <v-text-field
                      id="password"
                      v-model="form.password"
                      label="Password"
                      outlined
                      dense
                      :append-icon="visibility ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visibility ? 'text' : 'password'"
                      @click:append="() => (visibility = !visibility)"
                    />
                    <div class="d-flex mt-5">
                      <v-btn text color="primary" class="text-none px-2 __btn-login-text" @click="goToSignup()">
                        Create account
                      </v-btn>
                      <v-spacer />
                      <v-btn color="primary" class="text-none px-2" @click="login()">
                        Login
                      </v-btn>
                    </div>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      visibility: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    goToSignup() {
      this.$router.push({ name: 'signup' })
    },
    async login() {
      try {
        const { data } = await this.axios.post('/login', this.form)
        this.$store.dispatch('save_token', data.data)
        this.$router.push({ name: 'admin' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
