import axios from "axios";
import React, { useState } from "react";

function Navbar() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserList = () => {
    setLoading(true);
    axios.get("http://localhost:3001/api/bbs/transaction").then((res) => {
      setUserList(res.data);
      setLoading(false);
    });
  };

  return (
    <div className="container App">
      <h4 className="d-inline-block">Transaction History</h4>
      <button
        className="btn btn-info float-right"
        onClick={getUserList}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Transaction List"}
      </button>
      <div className="clearfix"></div>

      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Transaction Id</th>
            <th>From Name</th>
            <th>To Name</th>
            <th>Amount Transferd</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((x, i) => (
            <tr key={i}>
              <td>{x?.transaction_id}</td>
              <td>{x?.from_name}</td>
              <td>{x?.to_name}</td>
              <td>{x?.amount_transfered}</td>
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
    </div>
  );
}

export default Navbar;
