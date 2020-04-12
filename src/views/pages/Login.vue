<template>
  <div class="container-fluid">
    <b-row class="justify-content-center" align-v="center" style="min-height: 100%; height: 100vh;">
      <b-col class="bg-white p-5" cols="5">
        <div class="pl-5 pr-5">
          <b-form @submit.prevent="login">
            <div v-if="serverErrors.length">
              <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                <ul>
                  <li v-for="err in serverErrors" :key="err">{{err}}</li>
                </ul>
              </b-alert>
            </div>

            <b-form-group class="font-weight-bold" label="Email Address">
              <b-form-input type="text" class="form-control customInput"  name="email" v-validate="'required|email'" v-model="user.email" />
            </b-form-group>
            <p class="mb-3 text-danger">{{ errors.first('email') }}</p>

            <b-form-group class="font-weight-bold" label="Password">
              <b-form-input type="password" class="form-control customInput" name="password" v-validate="'required|min:6'" v-model="user.password"/>
            </b-form-group>
            <p class="mb-4 text-danger">{{ errors.first('password') }}</p>

            
            <b-row>
              <b-col class="text-center">
                <b-button type="submit" class="px-4 w-100 customSubmitBtn">LOGIN</b-button>
                <b-button variant="link" class="px-0 text-color" to="/forgot-password">Forgot Password?</b-button>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: '',
      },
      serverErrors: [],
      showDismissibleAlert: false,
    }
  },
  methods: {
    login() {
      this.$validator.validateAll().
        then((result) => {
        if(result) {
          this.$auth.login({
            data: {
              email: this.user.email,
              password: this.user.password
            },
            success: function(res) {
              console.log(res.data);
            },
            error: function(err) {
              this.showDismissibleAlert = true;
              this.serverErrors = [];
              if (err.response.data.message) {
                this.serverErrors.push(err.response.data.message);
              } else {
                this.handleErrors(err.response.data.errors);
              }

            },
            rememberMe: true,
            fetchUser: true,
            redirect: '/dashboard'
          })
        }
      });
    },

    handleErrors(Errs) {
      const newErr = [];
      _.forEach(Errs, function(value, key) {
        newErr.push(Errs[key][0]);
      });
      this.serverErrors = newErr;
    }
  },
  created () {
    if(this.$auth.ready() && this.$auth.check()) {
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped lang="scss">
  .customInput {
    border-radius:2px;
    padding: 10px 10px;
    height: 40px;
    background-color: #E5E7E8;
  }
  .customSubmitBtn {
    padding: 10px 0px;
    border-radius: 2px!important;
    background-color: #EF5B2C;
    color: #fff;
    font-weight: bold;
  }
  .customButton {
    border-radius: 1px!important;
    background-color: transparent;
    border: 1px solid #F6951E;
    color: #EF5B2C;
    font-size: 12px;
  }
  .text-color {
    font-weight: bold;
    color: #EF5B2C;
  }
</style>
