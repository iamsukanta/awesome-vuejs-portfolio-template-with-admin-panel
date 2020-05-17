<template>
  <div class="container container-block">
    <Header></Header>
    <div class="row home-section mt-3 mb-3">
      <div class="col">
        <img :src="aboutMe.image?envUrl+ aboutMe.image: '/img/nature.jpeg'" width="250px" height="250px">
        <div class="description" v-html="aboutMe.description?aboutMe.description: 'No Aboutme Data Found'"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './../../components/common/Header.vue'
import Footer from './../../components/common/Footer.vue'
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },

  data () {
    return {
      aboutMe: {},
      envUrl: process.env.VUE_APP_AWESOME_NODE_API_BASE_URL+'uploads/aboutImg/'
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
      })
      .catch(err => {
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