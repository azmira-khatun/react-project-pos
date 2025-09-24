import React from 'react';

const Home = () => {
    return (
        <div>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              This is Home Page
              {/* /.card-footer*/}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    );
};

export default Home;