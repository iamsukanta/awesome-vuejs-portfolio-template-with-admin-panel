<template>
  <div class="sidebar">
    <ul>
      <!-- <li class="mt-3"><router-link to="/dashboard"><img src="@/assets/images/kothao-mono.png"></router-link></li> -->
      <li><i class="fas fa-tachometer-alt"></i> Dashboard</li>
      <li><i class="fas fa-tachometer-alt"></i> Documentation</li>
      <li v-b-toggle.accordion-flights><i class="fas fa-tachometer-alt" ></i> Guide</li>
      <b-collapse class="sidebar-submenu" id="accordion-flights" accordion="my-accordion">
        <ul class="ml-4">
          <li>Partners</li>
          <li>Booking Reports</li>
          <li>Accounts & Collections <span class="badge badge-danger">fsdf</span></li>
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
    background: #1B1D29;
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      li {
        word-spacing: 5px;
        font-size: 14px;
        color: #A8A8A8!important;
        text-align: left;
        padding: 15px;
      }
      li:hover {
        background-color: #ccc;
      }
    }
  }
</style>