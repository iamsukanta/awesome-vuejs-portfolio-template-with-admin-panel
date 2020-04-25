<template>
  <div class="header-section">
    <div class="row">
      <div class="col">
        <h1>Sukanta Bala</h1>
        <h5>Programmer, Author, Tech Enthusiast</h5>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/blogs-list">Blogs</router-link>
          </li>
          <li>
            <router-link to="/portfolios">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li><a href="https://drive.google.com/file/d/1xFYi9ZqQpmtgn7dJzFk5HnjvjdxOtBSl/view?usp=sharing" target="_blank">Resume</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header-section {
    padding: 25px 0px;
    h1, h5 {
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