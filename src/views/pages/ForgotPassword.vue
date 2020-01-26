<template>
  <div class="container-fluid">
    <b-row class="justify-content-center" align-v="center" style="min-height: 100%; height: 100vh;">
      <b-col class="bg-white p-5" cols="5">
        <div class="text-center">
          <img src="../../assets/images/logo.png" height="50" alt="Logo"/>
        </div>
        <br/>
        <div class="pl-5 pr-5">
          <b-form @submit.prevent="forgotPassword">
            <div v-if="serverErrors.length">
              <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                <ul>
                  <li v-for="err in serverErrors" :key="err">{{err}}</li>
                </ul>
              </b-alert>
            </div>

            <b-form-group class="font-weight-bold" label="Enter Email Address">
              <b-form-input type="text" class="form-control customInput"  name="email" v-validate="'required|email'" v-model="user.email" />
            </b-form-group>
            <p class="mb-3 text-danger">{{ errors.first('email') }}</p>

            
            <b-row>
              <b-col class="text-center">
                <b-button type="submit" class="px-4 w-100 customSubmitBtn">SEND LINK</b-button>
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
  name: 'ForgotPassword',
  data () {
    return {
      user: {
        email: '',
      },
      serverErrors: [],
      showDismissibleAlert: false,
    }
  },
  methods: {
    forgotPassword() {
      this.$validator.validateAll().
        then((result) => {
        if(result) {
          this.axios.post(`${process.env.VUE_APP_API_GATEWAY_URL}/ipartners/forgot-password`, this.user)
            .then(res => {
            this.$toastr('success', "Successfully send reset password link in your email.", "Send Reset Password Link.");
            this.user.email = "";
          })
          .catch(err => {
            this.showDismissibleAlert = true;
            this.serverErrors = [];
            if(err.response.data.message) {
              this.serverErrors.push(err.response.data.message);
            } 
          })
        }
      });
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
