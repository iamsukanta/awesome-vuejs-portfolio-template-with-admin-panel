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
          <tbody v-if="aboutMeList.length">
            <tr v-for="(aboutMe, index) in aboutMeList" :key="index" :class="index== 0?'bg-success':''">
              <td>{{ aboutMe.description }}</td>
              <td><img :src="envUrl+'uploads/aboutImg/'+aboutMe.image" width="50px" height="50px"></td>
              <td><button class="btn btn-sm btn-warning" @click="editAboutMe(aboutMe._id)"><i class="far fa-edit"></i></button> <button class="btn btn-sm btn-danger" @click="deleteAboutMe(aboutMe._id)"><i class="far fa-trash-alt"></i></button> </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="3">No data added.</td>
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
      aboutMeList: [],
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
        this.aboutMeList = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    },
    editAboutMe(id) {
      this.$router.push(`/dashboard/about/edit/${id}`);
    },
    deleteAboutMe(id) {
      if(confirm("Are you sure want to delete this item?") == true) {
        this.axios
        .delete(
          `${process.env.VUE_APP_AWESOME_NODE_API}/aboutme/${id}`
        )
        .then(() => {
          alert("Aboutme Successfully Deleted");
          this.getAboutme();
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  },
  mounted() {
    this.getAboutme()
  }
}
</script>

<style scoped lang="scss">

</style>