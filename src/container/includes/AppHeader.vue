<template>
  <div class="app-header w-100  bg-white">
    <div class="row pl-3 pr-3 p-2">
      <div class="col app-header-top">
        <ul>
          <li class="pt-4">
            <i class="fas fa-bars"></i>
          </li>
        </ul>
      </div>

      <div class="col header-right-section">
        <ul>
          <li @click="showNavbarDropdown = !showNavbarDropdown">
            <div class="profileBox text-center pt-3">
              {{ $auth.user().name.substring(0, 1) }}
            </div>
          </li>
          <li><span :class="{active: showNavbarDropdown == false}"><i class="fas fa-chevron-down"></i></span><span :class="{active: showNavbarDropdown == true}"><i class="fas fa-chevron-up"></i></span></li>
        </ul>

        <div class="showNavbarDropdown text-left" v-if="showNavbarDropdown">
          <div class="row">
            <div class="col">
              <ul>
                <li> <i class="far fa-user"/> Profile</li>
                <hr/>
                <li @click="$auth.logout()"> <i class="fa fa-lock"/> Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="m-0 p-0"/>

    <div class="row pl-3 pr-3 p-2">
      <div class="col">
        <AppBreadCrumb></AppBreadCrumb>
      </div>
    </div>
  </div>
</template>

<script>
  import AppBreadCrumb from "./AppBreadCrumb.vue"
  export default {
    name: "Header",
    components: {
      AppBreadCrumb
    },
    data() {
      return {
        showNavbarDropdown: false,
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-header {
    width: 100%;
  }
  .app-header-top {
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      display: inline;
      li {
        margin-right: 18px;
        display: inline-block;
        
      }
    }
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  .header-right-section {
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      display: inline;
      float: right;
      li {
        margin-left: 5px;
        display: inline-block;

        .profileBox {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #ff0;
        }
        span {
          svg {
            display: none!important;
          }
        }
        .active svg {
          display: block!important;
        }
      }
    }
  }
  
  .showDropdownClass:hover {
    cursor: pointer;
  }

  .showNavbarDropdown {
    top: 38px;
    right: 14px;
    width: 220px;
    z-index: 10000!important;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    background: #fff;
    box-shadow: 0 0 5px #333;
    
    ul {
      width: 100%;
      list-style-type: none;
      padding: 0px;
      margin: 0px;
      li {
        text-align: left!important;
        cursor: pointer;
        width: 100%;
        padding: 7px 12px;
        a {
          color: #5B5B59;
        }
      }
    }
  }
</style>