<template>
  <div class="container-fluid bg-white">
    <div class="row p-3">
      <div class="col-12">
        <h4>REPORTS</h4>
        <hr/>
      </div>
      <br/>
      <div class="col-3 mt-3">
        <div class="form-group">
          <span><small>DATE RANGE</small></span>
          <input type="text" name="id" placeholder="Enter ID" class="form-control">
        </div>
      </div>

      <div class="col-2 mt-3">
        <div class="form-group">
          <span style="visibility:hidden"><small>Label</small></span>
          <button type="button" class="btn btn-primary w-100"> <i class="fas fa-search"></i> Apply</button>
        </div>
      </div>
    </div>

    <div class="row p-3">
      <div class="col text-right">
        <button type="button" class="btn btn-custom-color-secondary"> <i class="fas fa-download"></i></button>
      </div>
    </div>

    <div class="row p-3">
      <div class="col">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">FLIGHT</th>
              <th scope="col">DATE OF ISSUE</th>
              <th scope="col">AIRLINE</th>
              <th scope="col">PASSENGER</th>
              <th scope="col">PNR</th>
              <th scope="col">ISSUE</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row p-3">
      <div class="col-5">
      </div>
      <div class="col-3">
        <div class="form-group row">
          <label for="staticEmail" class="col-7 col-form-label">Number of Rows</label>
          <div class="col-5">
            <select class="form-control">
              <option>30</option>
              <option>40</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="form-group row">
          <label for="staticEmail" class="col-4 col-form-label">Page</label>
          <input type="number" name="pageno" class="form-control col-4">
          <label for="staticEmail" class="col-4 col-form-label">of 1</label>
        </div>
      </div>
      <div class="col-2 text-right">
        <button type="button" class="btn btn-custom-color-secondary"><b-icon-chevron-left></b-icon-chevron-left></button> &nbsp;&nbsp;
        <button type="button" class="btn btn-custom-color-secondary"><b-icon-chevron-right></b-icon-chevron-right></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .btn-custom-color-secondary {
    background: #f5f5f5;
  }
</style>