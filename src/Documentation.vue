<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <b-card no-body class="bg-info">
          <b-card-body class="p-5">
            <h1>16</h1>
            <p><router-link class="text-white" to="/blogs/manage">Total Blogs Post</router-link></p>
          </b-card-body>
        </b-card>
      </div>

      <div class="col-4">
        <b-card no-body class="bg-warning">
          <b-card-body class="p-5">
            <h1>16</h1>
            <p><router-link class="text-white" to="/blogs/manage">Total Blogs Post</router-link></p>
          </b-card-body>
        </b-card>
      </div>

      <div class="col-4">
        <b-card no-body class="bg-primary">
          <b-card-body class="p-5">
            <h1>16</h1>
            <p><router-link class="text-white" to="/blogs/manage">Total Blogs Post</router-link></p>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Documentation",
  }
</script>

<style scoped lang="scss">
  
</style>