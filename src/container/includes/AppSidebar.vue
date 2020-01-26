<template>
  <div class="sidebar">
    <ul>
      <li class="mt-3"><router-link to="/dashboard"><img src="@/assets/images/kothao-mono.png"></router-link></li>
      <li>
        <router-link to="/dashboard">
          <span :class="{'active': currentPage == '/dashboard' }"><i class="fas fa-th"></i><p style="word-break: break-all;">DASHBOARD</p></span>
        </router-link>
      </li>

      <li>
        <router-link to="/dashboard/reports">
          <span :class="{'active': currentPage == '/dashboard/reports' }"><i class="fas fa-chart-line"></i><p style="word-break: break-all;">REPORTS</p></span>
        </router-link>
      </li>

      <li>
        <router-link to="/dashboard/finance">
          <span :class="{'active': currentPage == '/dashboard/finance' }"><i class="fas fa-money-check-alt"></i><p style="word-break: break-all;">FINANCE</p></span>
        </router-link>
      </li>

      <li>
        <router-link to="/dashboard/finance">
          <span><i class="fas fa-users"></i><p style="word-break: break-all;">DEVELOPERS</p></span>
        </router-link>
      </li>
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
  .sidebar {
    position: fixed;
    width: 7%!important;
    height: 100%!important;
    background: #1B1D29;
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      li {
        
        font-size: 12px;
        color: #A8A8A8!important;
        text-align: center;
        padding: 20px 10px;
        // svg {
        //   width: 2rem;
        //   height: 2rem;
        // }
        a {
          width: 100%;
          color: #A8A8A8!important;
          p {
            font-size: 10px;
            color: #A8A8A8!important;
          }
          svg {
            width: 2rem!important;
            height: 2rem!important;
            path {
              fill: #A8A8A8!important;
            }
          }
          
        }
        .active {
          color: #fff;
          p {
            color: #fff!important;
          }
          svg {
            path {
              fill: #fff!important;
            }
          }
        }
        
        a:hover {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
</style>