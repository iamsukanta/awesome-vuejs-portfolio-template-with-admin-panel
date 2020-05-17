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
            <tr>
              <td>{{ resumeLink.url }}</td>
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
  name: 'ResumesLink',
  data() {
    return {
      resumeLink: {}
    }
  },

  methods: {
    getResumeLink() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/`,
      )
      .then(res => {
        this.resumeLink = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getResumeLink()
  }
}
</script>

<style scoped lang="scss">

</style>