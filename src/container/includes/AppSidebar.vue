<template>
  <div class="sidebar">

    <ul>
      <li class="text-center first-list-style">
        <img src="@/assets/images/kothao-mono.png" width="50px" height="50px">
      </li>
      <router-link to="/dashboard">
        <li><i class="fas fa-tachometer-alt"></i> Dashboard </li>
      </router-link>

      <router-link to="/dashboard/documentation">
        <li><i class="fas fa-book"></i> Documentation</li>
      </router-link>

      <li v-b-toggle.accordion-about-me><i class="fas fa-user-tie"></i> About Me <span class="when-opened"><i class="fas fa-chevron-up"></i></span> <span class="when-closed"><i class="fas fa-chevron-down"></i></span></li>
      <b-collapse class="sidebar-submenu" id="accordion-about-me" accordion="my-accordion">
        <ul>
          <router-link to="/dashboard/about">
            <li><i class="fas fa-directions"></i> Manage</li>
          </router-link>

          <router-link to="/dashboard/about/create">
            <li><i class="fas fa-plus"></i> Create</li>
          </router-link>
        </ul>
      </b-collapse>
      <li v-b-toggle.accordion-portfolio><i class="fas fa-tasks"></i> Portfolio <span class="when-opened"><i class="fas fa-chevron-up"></i></span> <span class="when-closed"><i class="fas fa-chevron-down"></i></span></li>
      <b-collapse class="sidebar-submenu" id="accordion-portfolio" accordion="my-accordion">
        <ul>
          <router-link to="/dashboard/portfolio">
            <li><i class="fas fa-directions"></i> Manage</li>
          </router-link>

          <router-link to="/dashboard/portfolio/create">
            <li><i class="fas fa-plus"></i> Create</li>
          </router-link>
        </ul>
      </b-collapse>

      <li v-b-toggle.accordion-blog-posts><i class="fas fa-blog"></i> Blog Post <span class="when-opened"><i class="fas fa-chevron-up"></i></span> <span class="when-closed"><i class="fas fa-chevron-down"></i></span></li>
      <b-collapse class="sidebar-submenu" id="accordion-blog-posts" accordion="my-accordion">
        <ul>
          <router-link to="/dashboard/blogs">
            <li><i class="fas fa-directions"></i> Manage</li>
          </router-link>

          <router-link to="/dashboard/blogs/create">
            <li><i class="fas fa-plus"></i> Create</li>
          </router-link>
        </ul>
      </b-collapse>

      <li v-b-toggle.accordion-resume-link><i class="far fa-file-pdf"></i> Resume Link <span class="when-opened"><i class="fas fa-chevron-up"></i></span> <span class="when-closed"><i class="fas fa-chevron-down"></i></span></li>
      <b-collapse class="sidebar-submenu" id="accordion-resume-link" accordion="my-accordion">
        <ul>
          <router-link to="/dashboard/resume">
            <li><i class="fas fa-directions"></i> Manage</li>
          </router-link>

          <router-link to="/dashboard/resume/create">
            <li><i class="fas fa-plus"></i> Create</li>
          </router-link>
        </ul>
      </b-collapse>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AppSidebar",
    computed: {
      currentPage() {
        return this.$route.path;
      }
    }
  }
</script>

<style lang="scss">
  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
  }

  :not(.collapsed) > .menu-color {
    color: #000;
  }
  .sidebar {
    position: fixed;
    width: 15%!important;
    height: 100%!important;
    background: #393836;
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      li {
        word-spacing: 5px;
        font-size: 14px;
        color: #fff!important;
        text-align: left;
        padding: 20px;
        cursor: pointer;
        span {
          float: right;
        }
      }
      .first-list-style {
        background-color: #292929;
      }
      li:hover {
        background-color: #111;
      }

      .sidebar-submenu {
        background-color: #222;
        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          li {
            padding-left: 40px;
            cursor: pointer;
          }
          li:hover {
            background-color: #555;
          }
          
        }
      }
    }
  }
</style>