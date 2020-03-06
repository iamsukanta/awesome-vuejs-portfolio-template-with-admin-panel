<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Create Portfolio</h3>
        <hr/>
        <form @submit.stop.prevent="createPortfolio">
          <div class="form-group">
            <label for="title">Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="title" v-model="portfolio.title" placeholder="Enter Title">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="web-link">Website Link</label>
            <input type="text" class="form-control" id="web-link" v-model="portfolio.url" placeholder="Enter Website Link">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="portfolio-description">Description <span class="text-danger">*</span></label>
            <textarea class="form-control" id="portfolio-description" v-model="portfolio.description" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfoliosCreate',
  data() {
    return {
      portfolio: {
        title: "",
        url: "",
        description: ""
      }
    }
  },

  methods: {
    createPortfolio() {
      this.axios
      .post(
        `${process.env.VUE_APP_AWESOME_NODE_API}/portfolio/create`,
        this.portfolio
      )
      .then(res => {
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