<template>
  <div id="app" class="main-body">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
  .main-body {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
  }

//   .main-body {
//     background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
//     background-size: 400% 400%;
//     animation: gradient 15s ease infinite;
// }

// @keyframes gradient {
//     0% {
//         background-position: 0% 50%;
//     }
//     50% {
//         background-position: 100% 50%;
//     }
//     100% {
//         background-position: 0% 50%;
//     }
// }
</style>
