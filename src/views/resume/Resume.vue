<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h3>Portfolios List</h3>
        <hr/>
        <br/>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Url Link</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resumeLink, index) in resumeLinks" :key="index" :class="index== 0?'bg-success':''">
              <td>{{ resumeLink.url }}</td>
              <td><button class="btn btn-sm btn-warning" @click="editResumeLink(resumeLink._id)"><i class="far fa-edit"></i></button> <button class="btn btn-sm btn-danger" @click="deleteResumeLink(resumeLink._id)"><i class="far fa-trash-alt"></i></button> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumesLink',
  data() {
    return {
      resumeLinks: []
    }
  },

  methods: {
    getResumeLinks() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/`,
      )
      .then(res => {
        this.resumeLinks = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    },

    editResumeLink(id) {
      this.$router.push(`/dashboard/resume/edit/${id}`);
    },
    deleteResumeLink(id) {
      if(confirm("Are you sure want to delete this item?") == true) {
        this.axios
        .delete(
          `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/${id}`
        )
        .then(() => {
          alert("Resumes Successfully Deleted");
          this.getResumeLinks();
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  },
  mounted() {
    this.getResumeLinks()
  }
}
</script>

<style scoped lang="scss">

</style>