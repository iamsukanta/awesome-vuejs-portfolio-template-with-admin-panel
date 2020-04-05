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
            <tr v-for="(portfolio, index) in portfoliosList" :key="index">
              <td>{{ portfolio.url }}</td>
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
      portfoliosList: []
    }
  },

  methods: {
    getAllPortfolios() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/`,
      )
      .then(res => {
        this.portfoliosList = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getAllPortfolios()
  }
}
</script>

<style scoped lang="scss">

</style>