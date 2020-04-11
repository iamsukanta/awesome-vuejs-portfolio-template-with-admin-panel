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
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ aboutMe.description }}</td>
              <td><img :src="envUrl+'uploads/aboutImg/'+aboutMe.image" width="50px" height="50px"></td>
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
      aboutMe: "",
      envUrl: process.env.VUE_APP_AWESOME_NODE_API_BASE_URL
    }
  },

  methods: {
    getAboutme() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/aboutme/`,
      )
      .then(res => {
        this.aboutMe = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getAboutme()
  }
}
</script>

<style scoped lang="scss">

</style>