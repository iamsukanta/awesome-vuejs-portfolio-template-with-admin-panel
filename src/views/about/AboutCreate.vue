<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Create Aboutme Section</h3>
        <hr/>
        <form @submit.stop.prevent="createAboutMe">
          <div class="form-group">
            <label for="about-description">Description <span class="text-danger">*</span></label>
            <textarea class="form-control" id="about-description" v-model="about.description" rows="3"></textarea>
          </div>

          <div class="form-group">
            <label for="about-image">About Image <span class="text-danger">*</span></label>
            <input type="file" class="form-control-file" id="about-image" ref="file" @change="onSelect">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCreate',
  data() {
    return {
      about: {
        description: "",
        image: ""
      }
    }
  },

  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.about.image = file;
    },
    createAboutMe() {
      var formData = new FormData();
      formData.append('description', this.about.description);
      formData.append('image', this.about.image);
      this.axios
      .post(
        `${process.env.VUE_APP_AWESOME_NODE_API}/aboutme/create`,
        formData
      )
      .then(res => {
        this.$toastr('success', "About Successfully Created.");
        console.log(res.data);
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