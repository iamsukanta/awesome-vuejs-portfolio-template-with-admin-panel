<template>
  <div class="container container-block">
    <Header></Header>
    <loading :active.sync="isLoading" 
        :is-full-page="true"></loading>
    <div class="row portfolio-section mt-3 mb-3">
      <div class="col">
        <h3>My Project's</h3>
        <br/>
        <div class="row mt-3 pl-3">
          <div class="col col-12 border-left border-secondary p-2 mt-4 mb-4" v-for="portfolio in portfoliosList" :key="portfolio._id" >
            <h4>{{ portfolio.title }}</h4>
            <p class="mt-2 mb-0"><b class="mr-2">Development Tools:</b> {{ portfolio.description }}</p>
            <p class="mt-0 mb-0"><b class="mr-2">Web Address:</b> <a :href="portfolio.url" target="_blank"> {{ portfolio.url }}</a></p>
          </div>

          <p class="mt-3"><b>and many more.</b></p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './../../../components/common/Header.vue';
import Footer from './../../../components/common/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "portfoliolist",
  components: {
    Header,
    Footer,
    Loading
  },

  data () {
    return {
      isLoading: false,
      portfoliosList: []
    }
  },

  methods: {
    getAllPortfolios() {
      this.isLoading = true;
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/portfolios/`,
      )
      .then(res => {
        this.isLoading = false;
        this.portfoliosList = res.data.data;
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      });
    }
  },

  mounted() {
    this.getAllPortfolios();
  }
  
}
</script>

<style scoped lang="scss">
  .portfolio-section {
    h3 {
      color: #000;
      font-weight: bold;
    }
  }
</style>