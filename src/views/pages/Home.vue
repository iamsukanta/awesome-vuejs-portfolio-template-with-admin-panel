<template>
  <div class="container container-block">
    <loading :active.sync="isLoading" 
        :is-full-page="true"></loading>
    <Header></Header>
    <div class="row home-section mt-3 mb-3">
      <div class="col">
        <img :src="aboutMe?.image?envUrl+ aboutMe?.image: '/img/nature.jpeg'" width="250px" height="250px">
        <div class="description" v-html="aboutMe?.description?aboutMe?.description: 'No Aboutme Data Found'"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './../../components/common/Header.vue'
import Footer from './../../components/common/Footer.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Loading
  },

  data () {
    return {
      isLoading: false,
      aboutMe: {},
      envUrl: process.env.VUE_APP_AWESOME_NODE_API_BASE_URL+'uploads/aboutImg/'
    }
  },

  methods: {
    getAboutme() {
      this.isLoading = true;
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/aboutme/latest`,
      )
      .then(res => {
        this.isLoading = false;
        this.aboutMe = res.data.data;
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      });
    }
  },

  mounted() {
    this.getAboutme();
  }
  
}
</script>

<style lang="scss">
  .container {
    background: #fff;
    border-radius: 20px;
  }
  .home-section {
    img {
      float: left;
      border: 3px solid #000;
      border-radius: 50%;
      margin-right: 15px;
      margin-bottom: 15px;
    }
    .description {
      h6 {
        font-size: 14px;
        margin: 30px 0px;
        text-align: justify;
        line-height: 20px!important;
      }

      h6:first-child {
        margin-top: 0px;
      }
    }
  }
</style>