<template>
  <div class="container container-block">
    <Header></Header>
    <div class="row portfolio-section mt-3 mb-3">
      <div class="col">
        <h3>Portfolio Section</h3>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './../../../components/common/Header.vue'
import Footer from './../../../components/common/Footer.vue'
export default {
  name: "portfoliolist",
  components: {
    Header,
    Footer
  }
  
}
</script>

<style scoped lang="scss">
  .portfolio-section {
    padding: 20px 0px;
    h3 {
      color: #000;
      font-weight: bold;
    }

    h5 {
      line-height: 30px;
    }
  }
</style>