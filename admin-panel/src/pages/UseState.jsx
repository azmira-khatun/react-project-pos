import React, { useState } from "react";
const UseState = () => {
  // const [price,setPrice] =useState(12);
  // const incrimentHandale = ()=>{
  //     const newPrice = price + 1;
  //     setPrice(newPrice);
  //     console.log(price);
  // }
  const [price, setPrice] = useState(0);

  const incriseHandle = () => {
    // console.log(price);
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  const decriseHandle = () => {
    // console.log(price);
    const newPrice = price - 1;
    setPrice(newPrice);
  };
  return (
    <div>
      <div className="content-wrapper">
        <section className="content">
          {/* Default box */}
          <div className="card">
            <p>
              We initialize our state by calling useState in our function
              component. useState accepts an initial state and returns two
              values: <br />
                1.The current state.<br />
                2. A function that updates the state.
                <br />
            </p>
            <h1>UseState</h1>
            <h2>Count Increase : {price}</h2>
            <button onClick={incriseHandle}>Increase</button>
            <button onClick={decriseHandle}>Dencrease</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UseState;
