
const Dashboard_placeholders  = () => {
    return ( 
        <div class="main-content-container container-fluid px-4">
      <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
          <h3 class="page-title">DASHBOARD</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-lg col-md-6 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Events</span>
                  <h6 class="stats-small__value count my-3">54</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">
                    4.7%
                  </span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-1"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Hubs</span>
                  <h6 class="stats-small__value count my-3">18</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">
                    12.4%
                  </span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-2"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-4 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">
                    chapters
                  </span>
                  <h6 class="stats-small__value count my-3">30</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--decrease">
                    3.8%
                  </span>
                </div>
              </div>
              <canvas
                height="120"
                class="blog-overview-stats-small-3 chartjs-render-monitor"
                style={{ display: "block", width: "132px", height: "52px" }}
                width="132"
              ></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-4 col-sm-6 mb-4">
          <div class="stats-small stats-small--1 card card-small">
            <div class="card-body p-0 d-flex">
              <div class="d-flex flex-column m-auto">
                <div class="stats-small__data text-center">
                  <span class="stats-small__label text-uppercase">Users</span>
                  <h6 class="stats-small__value count my-3">2,413</h6>
                </div>
                <div class="stats-small__data">
                  <span class="stats-small__percentage stats-small__percentage--increase">
                    12.4%
                  </span>
                </div>
              </div>
              <canvas height="120" class="blog-overview-stats-small-4"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-4 col-sm-12 mb-4">
        
        </div>
      </div>
    </div>
     );
}
 
export default Dashboard_placeholders;