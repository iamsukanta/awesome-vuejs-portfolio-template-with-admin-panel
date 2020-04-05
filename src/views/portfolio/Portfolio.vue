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
              <th scope="col">Url</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(portfolio, index) in portfoliosList" :key="index">
              <th>{{ portfolio.title }}</th>
              <td>{{ portfolio.url }}</td>
              <td>{{ portfolio.description }}</td>
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
        `${process.env.VUE_APP_AWESOME_NODE_API}/portfolios/`,
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