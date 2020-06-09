<template lang="html">
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="7">
        <v-card class="elevation-12 __b-20">
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="text-center">
                  <h3 class="headline">
                    Selamat Datang
                  </h3>
                  <h4 class="subtitle-1 mb-3">
                    Buat Akun
                  </h4>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="6" class="align-center">
                  <v-form>
                    <v-text-field v-model="form.name" label="Nama" type="text" outlined dense />
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
                    <div class="d-flex">
                      <v-btn text color="primary" class="text-none px-2 __btn-login-text" @click="goToLogin()">
                        Login
                      </v-btn>
                      <v-spacer />
                      <v-btn color="primary" class="text-none px-2" @click="signup()">
                        Signup
                      </v-btn>
                    </div>
                  </v-form>
                </v-col>
                <v-col cols="6">
                  <div class="pa-5">
                    <v-img src="@/static/images/svg/signup.svg" cotain />
                  </div>
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
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signup() {
      try {
        const { data } = await this.axios.post('/signup', this.form)
        this.$store.dispatch('save_token', data.data)
        this.$router.push({ name: 'admin' })
      } catch (e) {
        console.log(e)
      }
    },
    goToLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
