<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Edit Aboutme Section</h3>
        <hr/>
        <form @submit.stop.prevent="editAboutMe">
          <div class="form-group">
            <label for="about-description">Description <span class="text-danger">*</span></label>
            <wysiwyg v-model="about.description" id="about-description" name="about-description" placeholder="Enter About Description..."   />
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

  mounted() {
    this.axios
    .get(
      `${process.env.VUE_APP_AWESOME_NODE_API}/aboutme/${this.$route.params.id}`,
    )
    .then(res => {
      this.about = res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
  },

  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.about.image = file;
    },
    editAboutMe() {
      if(this.about.image) {
        let formData = new FormData();
        formData.append('description', this.about.description);
        formData.append('image', this.about.image);
        this.axios
        .post(
          `${process.env.VUE_APP_AWESOME_NODE_API}/aboutme/edit/${this.$route.params.id}`,
          formData
        )
        .then(res => {
          this.$toastr('success', "Aboutme Successfully Updated.");
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        alert("Please upload aboutme image.");
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>