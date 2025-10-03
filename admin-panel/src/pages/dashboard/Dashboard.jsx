import React from "react";
import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Navbar */}
        <NavBar />
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">DashBoard</a>
                    </li>
                    {/* <li className="breadcrumb-item active">Blank Page</li> */}
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-body">
                {/* Start creating your amazing application! */}

                <div className="row">
                  <div className="col-lg-3 col-9">
                    <div className="small-box bg-info h-100">
                      <div className="inner">
                        <h3>
                          {/*?php echo htmlspecialchars($today_orders); ?*/}
                        </h3>
                        <p>Today's Orders</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a
                        href="home.php?page=reports_sales"
                        className="small-box-footer"
                      >
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="small-box bg-success h-100">
                      <div className="inner">
                        <h3>
                          {/*?php echo htmlspecialchars($today_orders); ?*/}
                        </h3>
                        <p>Today's Sales</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a
                        href="home.php?page=reports_sales"
                        className="small-box-footer"
                      >
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning  h-100">
                      <div className="inner">
                        <h3>
                          {/*?php echo htmlspecialchars($total_products); ?*/}
                        </h3>
                        <p>Total Products</p>
                      </div>
                      <div className="icon">
                        <i className="fas fa-boxes" />
                      </div>
                      <a href="home.php?page=7" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger h-100">
                      <div className="inner">
                        <h3>
                          {/*?php echo htmlspecialchars($out_of_stock_products); ?*/}
                        </h3>
                        <p>Low Stock</p>
                      </div>
                      <div className="icon">
                        <i className="fas fa-exclamation-circle" />
                      </div>
                      <a href="home.php?page=7" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <Footer />
        {/* /.control-sidebar */}
      </div>
    </div>
  );
};

export default Dashboard;
