import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./Home.css"
import photo from './components_image/photo.jpg'

// import "./App.css"

function App() {
  return (
 
    <div style={{display:"-webkit-inline-box", margin: 0, height: '100%', overflow: "hidden"}}>
      <div  style={{ textAlign: "left" , height: "50%", width:"45%"}}>
        <div className="homebody">
        <h2>Welcome To</h2>
        <h1>Sparks Foundation</h1>
        <h2>Bank</h2>
        </div>
        <div>
          <h6>Bank Details : </h6>
          <text>
          Flow: 
          <br />
          Home Page 
          <br />
          Add - Add a new Customer
          <br />
          View - View All Customer and also select one to view complete details  <br />
          Transfer - Select customer to transfer to another customer <br />
          Transactions - View all Transactions
          </text>
        </div>
     
    </div>
    
    <div>
      <img 
      style={{height:"45rem", width:"58%"}}
      src={photo}
      alt="photo"
      />
    </div>

    </div>
  )
}

export default App
