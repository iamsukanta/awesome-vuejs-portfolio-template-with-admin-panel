<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h3>Blogs List</h3>
        <hr/>
        <br/>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="blogs.length > 0">
            <tr v-for="(blog, index) in blogs" :key="index">
              <td>{{ blog.title }}</td>
              <td><img :src="envUrl+'uploads/blogImg/'+blog.image" width="50px" height="50px"></td>
              <td><button class="btn btn-sm btn-warning"><i class="far fa-edit"></i></button> <button class="btn btn-sm btn-danger"><i class="far fa-trash-alt"></i></button> </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="3">No blog found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolios',
  data() {
    return {
      blogs: {},
      envUrl: process.env.VUE_APP_AWESOME_NODE_API_BASE_URL
    }
  },

  methods: {
    getBlogs() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/blogs/`,
      )
      .then(res => {
        this.blogs = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getBlogs()
  }
}
</script>

<style scoped lang="scss">

</style>