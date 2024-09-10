<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Create Resume Link</h3>
        <hr/>
        <form @submit.stop.prevent="createResumeLink">
          <div class="form-group">
            <label for="web-link">Resume Link</label>
            <input type="text" class="form-control" id="web-link" v-model="resume.url" placeholder="Enter Resume Link">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfoliosCreate',
  data() {
    return {
      resume: {
        url: ""
      }
    }
  },

  methods: {
    createResumeLink() {
      this.axios
      .post(
        `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/create`,
        this.resume
      )
      .then(() => {
        alert("Resume Successfully created.");
        this.$router.push(`/dashboard/resume/`);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped lang="scss">

</style>