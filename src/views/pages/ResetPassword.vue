<template>
  <div class="container-fluid">
    <b-row class="justify-content-center" align-v="center" style="min-height: 100%; height: 100vh;">
      <b-col class="bg-white p-5" cols="5">
        <div class="text-center">
          <img src="../../assets/images/logo.png" height="50" alt="Logo"/>
        </div>
        <br/>
        <div class="pl-5 pr-5">
          <b-form @submit.prevent="resetPassword">
            <div v-if="serverErrors.length">
              <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                <ul>
                  <li v-for="err in serverErrors" :key="err">{{err}}</li>
                </ul>
              </b-alert>
            </div>

            <b-form-group class="font-weight-bold" label="New Password">
              <b-form-input type="password" class="form-control customInput"  name="password" v-validate="'required|min:6'" v-model="user.password" />
            </b-form-group>
            <p class="mb-3 text-danger">{{ errors.first('password') }}</p>

            <b-form-group class="font-weight-bold" label="Confirm Password">
              <b-form-input type="password" class="form-control customInput"  name="password_confirmation" v-validate="'required|min:6'" v-model="user.confirm_password" />
            </b-form-group>
            <p class="mb-3 text-danger">{{ errors.first('password_confirmation') }}</p>

            
            <b-row>
              <b-col class="text-center">
                <b-button type="submit" class="px-4 w-100 customSubmitBtn">RESET PASSWORD</b-button>
                <span class="text-color">Already Account? </span><b-button variant="link" class="px-0 text-color" to="/login">Login</b-button>
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
  name: 'ResetPassword',
  data () {
    return {
      user: {
        confirm_password: '',
        password: '',
        token: ""
      },
      serverErrors: [],
      showDismissibleAlert: false,
    }
  },
  methods: {
    resetPassword() {
      this.$validator.validateAll().
        then((result) => {
        if(result) {
          if(this.user.password == this.user.confirm_password) {
            this.axios.post(`${process.env.VUE_APP_API_GATEWAY_URL}/ipartners/reset-password`, this.user)
              .then(res => {
              this.$toastr('success', "Successfully reset password.", "Password Reset!");
              this.user.password = "";
              this.$router.push('/login');
            })
            .catch(err => {
              this.showDismissibleAlert = true;
              this.serverErrors = [];
              if(err.response.data.message) {
                this.serverErrors.push(err.response.data.message);
              } 
            })
          } else {
            alert("Password and Confirm password does not match.");
          }
        }
      });
    }
  },

  mounted() {
    this.user.token = this.$route.query.token;
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
