<template>
  <div class="container container-block">
    <Header></Header>
    <div class="row portfolio-section mt-3 mb-3">
      <div class="col">
        <h3>My Portfolio's</h3>
        <br/>
        <div class="row mt-3 pl-3">
          <div class="col col-12 border-left p-2" >
            <h4>Protfolio Title</h4>
            <p class="mt-2 mb-0"><b>Development Tools:</b> Tools</p>
            <p class="mt-0 mb-0"><b>Web Address:</b> Web Address</p>
          </div>
        </div>
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
    h3 {
      color: #000;
      font-weight: bold;
    }
  }
</style>