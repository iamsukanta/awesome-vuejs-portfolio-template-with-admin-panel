<template>
  <div class="container-fluid bg-white">
    <div class="row finance-section-tab text-center">
      <div class="col p-0">
        <ul>
          <li>
            <h4><i class="fas fa-balance-scale-right"></i></h4>
            <h4>Balance</h4>
          </li>
          <li>
            <h4><i class="fas fa-money-check-alt"></i></h4>
            <h4>Payments</h4>
          </li>
          <li>
            <h4><i class="far fa-credit-card"></i></h4>
            <h4>Payment Details</h4>
          </li>
        </ul>
      </div>
    </div>
    <br/><br/>
    <div class="row p-3">
      <div class="col-12 mb-3">
        <h4>Balance history</h4>
      </div>

      <div class="col-2">
        <div class="form-group">
          <span><small>SOURCE</small></span>
          <select class="form-control">
            <option>Any</option>
            <option>All</option>
          </select>
        </div>
      </div>

      <div class="col-2">
        <div class="form-group">
          <span><small>FIND BY ID</small></span>
          <input type="text" name="id" placeholder="Enter ID" class="form-control">
        </div>
      </div>

      <div class="col-2">
        <div class="form-group">
          <span><small>DATE RANGE</small></span>
          <input type="text" name="id" placeholder="All the time" class="form-control">
        </div>
      </div>

      <div class="col-2">
        <span style="visibility:hidden">Label</span>
        <button type="submit" class="btn btn-primary w-100"><i class="fas fa-search"></i> Apply</button>
      </div>
    </div>
    <div class="row p-3">
      <div class="col">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">SOURCE</th>
              <th scope="col">ACTION ID</th>
              <th scope="col">ACTION DATE</th>
              <th scope="col">UPDATE DATE</th>
              <th scope="col">STATUS</th>
              <th scope="col">SUM</th>
              <th scope="col">BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .finance-section-tab {
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      li {
        background: #F5F7FA;
        padding: 15px;
        width: 33.3%;
        display: inline-block;
        border: 1px solid #ccc;
      }

      li:first-child {
        background: #fff;
        border: 0px solid #ccc;
      }

      li:last-child {
        // border: 1px solid #ccc;
        // border-bottom: 1px solid #ccc;
        // border-left: 1px solid #ccc;
      }
    }
  }
</style>