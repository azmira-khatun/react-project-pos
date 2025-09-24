import React from "react";

const Destructure = () => {
    const user ={ 
        firstName: 'Rafi',
        lastName: { 
            name: 'Ahmed'
        },
    };
    const fname =user.firstName;
    const lname =user.lastName;
    const {firstName,
        lastName:{
            name,
        }}= user;
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <h1>Object destructing</h1>
            <h1>{firstName + ' '+name}</h1>
            <h1>{fname + ' '+lname}</h1>
           
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};

export default Destructure;
