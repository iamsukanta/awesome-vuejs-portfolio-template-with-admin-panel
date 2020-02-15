<template>
  <div class="wrapper">
    <div class="app-sidebar">
      <AppSidebar></AppSidebar>
    </div>
    <div class="app-body">
      <AppHeader></AppHeader>
      <div class="mt-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './includes/AppHeader.vue'
import AppFooter from './includes/AppFooter.vue'
import AppSidebar from './includes/AppSidebar.vue'
export default {
  name: "DefaultContainer",
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    background: #F5F7FA;
    min-height: 650px;
    width: 100%;
    position: relative;
    display: flex;
    .app-sidebar {
      width: 15%;
    }
    .app-body {
      width: 85%;
    }
  }
</style>