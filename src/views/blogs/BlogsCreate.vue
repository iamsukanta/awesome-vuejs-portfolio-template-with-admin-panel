<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Create Blog Post</h3>
        <hr/>
        <form @submit.stop.prevent="createBlogPost">
          <div class="form-group">
            <label for="title">Blog Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="title" v-model="blog.title" placeholder="Enter Title">
          </div>

          <div class="form-group">
            <label for="blog-description">Blog Description <span class="text-danger">*</span></label>
            <textarea class="form-control" id="blog-description" v-model="blog.description" rows="3"></textarea>
          </div>

          <div class="form-group">
            <label for="banner-image">Banner Image <span class="text-danger">*</span></label>
            <input type="file" class="form-control-file" id="banner-image">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogsCreate',
  data() {
    return {
      blog: {
        title: "",
        url: "",
        description: ""
      }
    }
  },

  methods: {
    createBlogPost() {
      this.axios
      .post(
        `${process.env.VUE_APP_AWESOME_NODE_API}/blogs/create`,
        this.blog
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