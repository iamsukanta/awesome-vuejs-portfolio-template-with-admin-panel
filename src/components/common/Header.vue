<template>
  <div class="header-section">
    <div class="row">
      <div class="col">
        <h1>Sukanta Bala</h1>
        <h5>Full Stack Developer, Blogger, Tech Enthusiast</h5>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>

          <li>
            <router-link to="/portfolios">Projects</router-link>
          </li>

          <li>
            <router-link to="/contact">Contact</router-link>
          </li>

          <li>
            <a :href="resumeLink?resumeLink.url:'https://drive.google.com/file/d/1g3_Magj5ihwZQz0Yi0Q4WBPCr3qAa2Dp/view'" target="_blank">My Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      resumeLink: {}
    }
  },

  methods: {
    getResumeLink() {
      this.axios
      .get(
        `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/latest`,
      )
      .then(res => {
        this.resumeLink = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    }
  },

  mounted() {
    this.getResumeLink();
  } 
}
</script>



<style scoped lang="scss">
  .header-section {
    padding: 25px 0px;
    h1 {
      font-weight: bold;
      text-align: center;
    }
    h5 {
      text-align: center;
    }
    ul {
      list-style-type: none;
      margin: 0px;
      text-align: center;
      padding: 0px;
      li {
        display: inline-block;
        margin: 0px 10px; 
      }
    }
  }
</style>