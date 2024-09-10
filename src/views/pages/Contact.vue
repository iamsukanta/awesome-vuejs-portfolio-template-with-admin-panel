<template>
  <div class="container container-block">
    <Header></Header>
    <div class="row contact-section mt-3 mb-3">
      <div class="col">
        <h3>Connect With Me 👌</h3>
        <br/>
        <h5><i class="fas fa-envelope-open-text"></i>  <span>sukantabalacste28@gmail.com, sukantabalacste2016@gmail.com</span></h5>
        <h5><i class="fas fa-phone"></i> <span>+880-01738123140</span></h5>
        <h5><i class="fab fa-linkedin-in"></i> <span><a href="https://www.linkedin.com/in/sukanta-bala-461418117/" target="_blank">https://linkedin.com/sukanta-bala</a></span></h5>
        <h5><i class="fas fa-globe-americas"></i> <span><a href="https://iamsukanta.com" target="_blank" >https://iamsukanta.com</a></span></h5>
        <h5><i class="fab fa-skype"></i> <span>live:.cid.b73464eeea8d430b </span></h5>
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
    h3 {
      color: #000;
      font-weight: bold;
    }

    h5 {
      line-height: 30px;
      span {
        font-size: 14px;
        color: #555;
        padding-left: 15px;
      }
    }
  }
</style>