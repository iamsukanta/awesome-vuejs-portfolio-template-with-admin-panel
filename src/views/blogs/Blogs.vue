<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h3>Portfolios List</h3>
        <hr/>
        <br/>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Banner Image</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(blog, index) in blogsList" :key="index">
              <th>{{ blog.title }}</th>
              <td><img :src="envUrl+'uploads/blogImg/'+blog.image" width="50px" height="50px"></td>
              <td>{{ blog.description }}</td>
              <td><button class="btn btn-sm btn-warning"><i class="far fa-edit"></i></button> <button class="btn btn-sm btn-danger"><i class="far fa-trash-alt"></i></button> </td>
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
      blogsList: [],
      envUrl: process.env.VUE_APP_AWESOME_NODE_API_BASE_URL
    }
  },

  methods: {
    getAllBlogs() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/blogs/`,
      )
      .then(res => {
        this.blogsList = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getAllBlogs()
  }
}
</script>

<style scoped lang="scss">

</style>