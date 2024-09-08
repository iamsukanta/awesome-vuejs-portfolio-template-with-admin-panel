<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Create Blog Section</h3>
        <hr/>
        <form @submit.stop.prevent="createBlog">
          <div class="form-group">
            <label for="blog-title">Blog Title <span class="text-danger">*</span></label>
            <input type="text" v-model="blog.title" class="form-control" name="blog-title" placeholder="Enter blog title" />
          </div>

          <div class="form-group">
            <label for="blog-description">Blog Description <span class="text-danger">*</span></label>
            <wysiwyg v-model="blog.description" id="blog-description" name="blog-description" placeholder="Enter Blog Description..."   />
          </div>

          <div class="form-group">
            <label for="cover-image">Cover Image <span class="text-danger">*</span></label>
            <input type="file" class="form-control-file" id="cover-image" ref="file" @change="onSelect">
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
      blog: {
        title: "",
        description: "",
        image: ""
      }
    }
  },

  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.blog.image = file;
    },
    createBlog() {
      var formData = new FormData();
      formData.append('title', this.blog.title)
      formData.append('description', this.blog.description);
      formData.append('image', this.blog.image);
      this.axios
      .post(
        `${process.env.VUE_APP_AWESOME_NODE_API}/blogs/create`,
        formData
      )
      .then(res => {
        this.$toastr('success', "Blog Successfully Created.");
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