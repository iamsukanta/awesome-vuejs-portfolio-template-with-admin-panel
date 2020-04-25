<template>
  <div class="container container-block">
    <Header></Header>
    <div class="row contact-section mt-3 mb-3">
      <div class="col">
        <h3>Contact With Me</h3>
        <br/>
        <h5><i class="fas fa-envelope-open-text"></i> sukantabalacste28@gmail.com</h5>
        <h5><i class="fab fa-linkedin-in"></i> http://sukantabala.com</h5>
        <h5><i class="fas fa-globe-americas"></i> http://sukantabala.com</h5>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './../../components/common/Header.vue'
import Footer from './../../components/common/Footer.vue'
export default {
  name: "contact",
  components: {
    Header,
    Footer
  }
  
}
</script>

<style scoped lang="scss">
  .contact-section {
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