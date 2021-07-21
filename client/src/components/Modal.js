import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import dateFormat from 'dateformat'

const Modal = ({data,handleClose,open}) => {
    console.log(data)
    return (
        <>
           <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Customer Details</DialogTitle>
        <DialogContent>        
            {"Name : " + data?.fname + " " + data?.mname + " " + data?.ltname}  <br />
            {"Mobile Number : " + data?.mobileno}  <br />
            {"Email : " + data?.email}  <br />
            {"Address : " + data?.city}   <br />
            {"Occupation : " + data?.occupation}  <br />
            {"DOB : " +  dateFormat(data?.dob, "dd-mm-yyyy")}  <br />
            {"Amount : " + data?.amount} 
           
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog> 
        </>
    )
}

export default Modal
