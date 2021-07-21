import axios from "axios";
import React, { useState ,useEffect} from "react";
import Dialog from '@material-ui/core/Dialog';
import Modal from './Modal'

function Navbar() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState()

  useEffect(() => {
    getUserList()
  }, [])

  const getUserList = () => {
    setLoading(true);
    axios.get("http://localhost:3001/api/bbs").then((res) => {
      setUserList(res.data);
      setLoading(false);
    });
  };
  const handleKey=(i)=>{
    console.log("hey",i)
    setKey(i)
    setOpen(s=>!s)
  }

  return (
    <div className="container App">
      <h4 className="d-inline-block">View All Customer</h4>
      <div className="clearfix"></div>

      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody style={{cursor:"pointer"}}>
          {userList.map((x, i) => (
            <tr key={i} onClick={e=>handleKey(i)}>
             <td>{x?.custid}</td>
              <td>{x?.fname} {x?.mname} {x?.ltname}</td>
              <td>{x?.email}</td>
              <td>{x?.mobileno}</td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td className="text-center" colSpan="4">
                <b>No data found to display.</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal data={userList[key]} open={open} handleClose={handleKey}/>
    </div>
    
  );
}

export default Navbar;
