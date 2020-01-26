<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <div class="row bg-white p-3 text-center">
          <div class="col">
            <span class="font-weight-bold">Today</span>
            <h5>0$</h5>
          </div>
          <div class="col">
            <span class="font-weight-bold">Yesterday</span>
            <h5>0$</h5>
          </div>
          <div class="col">
            <span class="font-weight-bold">January 2020</span>
            <h5>0$</h5>
          </div>
          <div class="col">
            <span class="font-weight-bold">December 2019</span>
            <h5>0$</h5>
          </div>
          <div class="col">
            <input type="text" class="form-control" name="custom-date" placeholder="CUSTOM DATE">
          </div>
        </div>

        <br/>

        <div class="row bg-white">
          <div class="col p-0">
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">TOTAL TICKETS SOLD</th>
                  <th scope="col">TOTAL NO. OF BOOKING</th>
                  <th scope="col">TOTAL CUSTOMERS</th>
                  <th scope="col">TOTAL AMOUNT</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>570</th>
                  <td>800</td>
                  <td>130</td>
                  <td>9,57,300</td>
                  <td><button class="btn btn-custom">DETAILS</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <br/>

        <div class="row bg-white text-center">
          <div class="col p-3 border-bottom">
            <span class="font-weight-bold">Payout</span>
            <h5>0$</h5>
          </div>
          <div class="col p-3 border-bottom-custom">
            <span class="font-weight-bold">Searches</span>
            <h5>15991</h5>
          </div>
          <div class="col p-3 border-bottom">
            <span class="font-weight-bold">Clicks</span>
            <h5>61</h5>
          </div>
        </div>
        <div class="row bg-white text-center">
          <div class="col">
            <div class="chart-wrapper">
              <Barchart chartId="chart-bar-01" :height="200"/>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3 blog-section pr-0">
        <div class="blog-section-tab bg-white w-100 text-center">
          <ul>
            <li><h5>Blog</h5></li>
            <li><h5>News</h5></li>
          </ul>
        </div>

        <div class="blog-section-details p-3  bg-white w-100">
          <ul>
            <li>
              <p>The best keyword ranking checkers in 2020</p>
              <span>22 January</span>
            </li>
            <hr/>
            <li>
              <p>The best keyword ranking checkers in 2020</p>
              <span>22 January</span>
            </li>
            <hr/>
            <li>
              <p>The best keyword ranking checkers in 2020</p>
              <span>22 January</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Barchart from './charts/Barchart'
  export default {
    name: "Dashboard",
    components: {
      Barchart
    }
  }
</script>

<style scoped lang="scss">
  .blog-section-tab {
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      li {
        background: #F5F7FA;
        padding: 15px;
        width: 50%;
        display: inline-block;
      }

      li:first-child {
        background: #fff;
      }

      li:last-child {
        border: 1px solid #ccc;
        // border-bottom: 1px solid #ccc;
        // border-left: 1px solid #ccc;
      }
    }
  }

  .blog-section-details {
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
    }
  }
  .border-bottom-custom {
    border-bottom: 1px solid #4995FF;
  }
  .btn-custom {
    background: #EE592E;
    color: #fff;
  }
</style>