<template>
  <div class="app-header w-100 container-fluid bg-white">
    <div class="row p-2">
      <div class="col app-header-top">
        <ul>
          <li>
            <span>Earnings</span>
            <h4>11.38$</h4>
          </li>
          <li>
            <span>Payment Pending</span>
            <h4>0$</h4>
          </li>
        </ul>
      </div>

      <div class="col text-right">
        <span @click="showNavbarDropdown = !showNavbarDropdown" class="showDropdownClass"><span><i class="far fa-user"></i></span> &nbsp; {{ $auth.user().name }} &nbsp; <span v-if="showNavbarDropdown == false"><i class="fas fa-chevron-down"></i></span> <span v-if="showNavbarDropdown == true"><i class="fas fa-chevron-up"></i></span></span>
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
    <hr class="m-0"/>
    <div class="row p-2">
      <div class="col">
        <h4>Main</h4>
      </div>
      <div class="col text-right mr-5">
        <span>Server Time 23.01.2020, 05:48</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showNavbarDropdown: false,
      }
    }
  }
</script>

<style scoped lang="scss">
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
      list-style-type: none;
      padding: 0px;
      margin: 0px;
      li {
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