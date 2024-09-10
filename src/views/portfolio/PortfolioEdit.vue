<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-6">
        <h3>Edit Portfolio</h3>
        <hr/>
        <form @submit.stop.prevent="editPortfolio">
          <div class="form-group">
            <label for="title">Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="title" v-model="portfolio.title" placeholder="Enter Title" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="web-link">Website Link</label>
            <input type="text" class="form-control" id="web-link" v-model="portfolio.url" placeholder="Enter Website Link">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="portfolio-description">Description <span class="text-danger">*</span></label>
            <wysiwyg v-model="portfolio.description" id="portfolio-description" name="portfolio-description" placeholder="Enter portfolio Description..."   />
          </div>

          <div class="form-group">
            <label for="portfolio-development-technology">Development Technology <span class="text-danger">*</span></label>
            <textarea class="form-control" id="portfolio-development-technology" v-model="portfolio.development_technology" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfoliosEdit',
  data() {
    return {
      portfolio: {
        title: "",
        url: "",
        description: "",
        development_technology: ""
      }
    }
  },

  mounted() {
    this.axios
    .get(
      `${process.env.VUE_APP_AWESOME_NODE_API}/portfolios/${this.$route.params.id}`,
    )
    .then(res => {
      this.portfolio = res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
  },

  methods: {
    editPortfolio() {
      this.axios
      .post(
        `${process.env.VUE_APP_AWESOME_NODE_API}/portfolios/edit/${this.$route.params.id}`,
        this.portfolio
      )
      .then(() => {
        alert("Portfolio Successfully Edited.");
        this.$router.push(`/dashboard/portfolio/`);
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