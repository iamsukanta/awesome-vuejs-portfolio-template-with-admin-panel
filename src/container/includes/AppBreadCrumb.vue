<template>
  <div class="app-breadcrumb" separator="/">
    <b-breadcrumb :items="crumbs"/>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
}
}
</script>

<style lang="scss" scoped>
  .app-breadcrumb {
    .breadcrumb {
      padding: 5px 0px!important;
      background-color: transparent;
      margin: 0px;
      .breadcrumb-item, .breadcrumb-item a{
        text-transform: capitalize!important;
      }
    }
  }
</style>