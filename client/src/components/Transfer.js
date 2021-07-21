import axios from "axios";
import React, { useState,useEffect } from "react";
import {Grid,SelectField} from "@material-ui/core"
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Navbar=()=>{
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
const [options, setOptions] = useState([])
const [sender, setSender] = useState()
const [recieve, setRecieve] = useState()
const [money, setMoney] = useState()
const [error, setError] = useState("");
useEffect(() => {
    getUserList()
}, [])

let history = useHistory();

  const getUserList = async() => {
    setLoading(true);
    axios.get("http://localhost:3001/api/bbs").then((res) => {
        console.log(res.data)
        const data={}
        for(let i=0;i<res.data.length;i++){
            data[res.data[i]["custid"]]=res.data[i]?.fname + " " + res.data[i]?.mname + " "
            +res.data[i].ltname
        }
        console.log(data)
        setOptions(data)
      setUserList(res.data);
      setLoading(false);
    });
  };
const handleChange=(e)=>{
  // console.log(e,e.target.value)
  setSender(e.target.value)
}
const handleRecieve=(e)=>{
  setRecieve(e.target.value)
}
const handleMoney=(e)=>{
  setMoney(e.target.value)
}
const handleSubmit=async()=>{
  if (!sender || !recieve || !money ) {
    setError("Provide All Required Fields")
  }else{
    await axios.post("http://localhost:3001/api/bbs/",{sender:sender,reciever:recieve,amount:money}).then(res=>{
    // console.log(res)
    history.push("/transactions");
  }).catch(error=>console.log(error))    
  }
  // console.log(sender,recieve,money)
  
}
  return (
    <>
      <Grid container style={{textAlign:"center",marginTop : "7%"}}>
 
          <Grid item xs={12}>
          <h4 style={{color:"slateblue"}}>Trasfer Money</h4>
            <label>Sender Name</label>
            <br />
            <Select 
            label="Sender"
            style={{padding:"20px",height:"20px",width:"300px"}}
            value={sender}
          onChange={handleChange}>
            {Object.keys(options).map(item=>(
              <option value={item} style={{width:"20rem"}}>{options[item]}</option>
            ))}
          </Select>         
          </Grid>
          <Grid item xs={12}>
          <label>Reciever's Name</label>
          <br />
          <Select 
            label="Reciever"
            style={{padding:"20px",height:"20px",width:"300px"}}
            value={recieve}
            onChange={handleRecieve}>
            {Object.keys(options).map(item=>(
              <option value={item}>{options[item]}</option>
            ))}
          </Select>
          </Grid>
          <Grid item xs={12}>
            <labe>Amount</labe>
            <br />
          <input 
          type="number"
            style={{padding:"20px",height:"0.25px",width:"265px"}}
            value={money}
            onChange={handleMoney}>
          </input>
          <h6 style={{color:"red"}}>{error}</h6 >
          </Grid>         
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
