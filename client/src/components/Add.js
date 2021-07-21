import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./Add.css"

// import "./App.css"

function App() {

  const [fname, setName] = useState("");
  const [mname, setmName] = useState("");
  const [ltname, setlName] = useState("");
  const [city, setCity] = useState("");
  const [mobileno, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [dob, setDob] = useState("");
  const [amount, setAmount] = useState("");
  // const [account, setAccount] = useState("");


  const [addList, setAddlist] = useState([]);
  const [error, setError] = useState("");

  let history = useHistory();


  const addEmployee = () => {
    if (!fname || !ltname || !amount) {
      setError("Provide All Details")
    }else{

      Axios.post("http://localhost:3001/api/bbs/create", {
        fname: fname,   
        mname : mname ,
        ltname : ltname ,
        city : city ,
        mobileno : mobileno ,
        email : email ,
        occupation : occupation ,
        dob : dob ,
        amount : amount 
        // account: account,
      }).then(() => {
        setAddlist([
          ...addList,
          {
            fname: fname, 
            mname : mname ,
            ltname : ltname ,
            city : city ,
            mobileno : mobileno ,
            email : email ,
            occupation : occupation ,
            dob : dob ,
            amount : amount ,
            // account: account,
          },
        ]);
      });
      history.push("/views");

    }
  
  };


 
  return (
    <div style={{ textAlign: "center", }}>
      <h4>Add Customer Details</h4>
      <label>Name</label>
      <br />
      <input
        type="text"
        // value={name}
        onChange={(e) => setName(e.target.value)} placeholder = "First Name"
        style={{width:"20rem"}}
      />
      <label> </label>
      <input
        type="text"
        // value={name}
        onChange={(e) => setmName(e.target.value)} placeholder = "Middle Name"
        style={{width:"20rem"}}
      />
       <label> </label>
      <input
        type="text"
        // value={name}
        onChange={(e) => setlName(e.target.value)} placeholder = "Last Name"
        style={{width:"20rem"}}
      />
      <br />
      <label>Address</label>
      <br />
      <input type="text"
        // value={account}
        onChange={(e) => setCity(e.target.value)} placeholder = "Address"
        style={{width:"20rem"}}
      />
   <br />
   <label>Mobile Number</label>
      <br />
      <input type="number" maxLength = "12"
        // value={account}
        onChange={(e) => setMobileNumber(e.target.value)} placeholder = "Mobile Number"
        style={{width:"20rem"}}
      />
   <br />
   <label>Email</label>
      <br />
      <input type="email"
        // value={account}
        onChange={(e) => setEmail(e.target.value)} placeholder = "Email"
        style={{width:"20rem"}}
      />
   <br />
   <label>Occupation</label>
      <br />
      <input type="text"
        // value={account}
        onChange={(e) => setOccupation(e.target.value)} placeholder = "Occupation"
        style={{width:"20rem"}}
      />
   <br />
   <label>DOB</label>
      <br />
      <input type="date"
        // value={account}
        onChange={(e) => setDob(e.target.value)}
        style={{width:"20rem"}}
      />
   <br />
   <label>Amount</label>
      <br />
      <input type="number"
        // value={account}
        onChange={(e) => setAmount(e.target.value)} placeholder = "Amount"
        style={{width:"20rem"}}
      />
   <br />
   <h4 style={{color:"red"}}>{error}</h4>   
      <button className="button" onClick={addEmployee}>Add Details</button>
    </div>
  )
}

export default App
