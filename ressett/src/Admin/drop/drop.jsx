import * as React from 'react';
// import "./deetailsofcompletedjobs.css"
import { useNavigate } from "react-router-dom";

export default function Dropup() {
  const navigate = useNavigate();
       
  const gback = () => {
    navigate("/radha/pendingcompletesection/completeddroppickup");
  };
return (
    <>
      <div style={{padding :"3rem"}}>
      <h1> Drop </h1>
      <div >
            <b className='deliveryboy' ><i> Delivery Boy</i> </b>
        <div className='det' > Lorem name and details will come from backend </div>
        </div>
        <div className='mt-3' >
            <b className='deliveryboy' ><i> Pick-Up Details</i> </b>
        <div className='det' > Lorem name and details will come from backend </div>
        </div>
        <div  className='mt-3' >
        <div className='det' > Lorem name and details will come from backend </div>
        </div>
        <div  className='mt-3' >
            <b className='deliveryboy' ><i> Entered Address</i> </b>
        <div className='det' > Lorem name and details will come from backend </div>
        </div>
        <div className='mt-3'  >
            <b className='deliveryboy' ><i> Entered Item Details </i> </b>
        <div className='det' > Lorem name and details will come from backend </div>
        </div>
        <div  className='mt-3' style={{display:"flex",gap : "1srem"}} >
        <div className='col-6' >
        <b className='deliveryboy' ><i> Enter Status</i> </b>
        <div className='det ' > Lorem name and details will come from backend </div>
        </div>
        <div className='col-6'>
        <b className='deliveryboy' ><i> Payment Status</i> </b>
        <div className='det' style={{marginLeft:"1rem"}} > Lorem name and details will come from backend </div>
        </div>
        </div>

        <div className='mt-3' >
            <b className='deliveryboy' ><i> Pick-Up Details</i> </b>
        <div className='det' > Lorem name and details will come from backend </div>
        </div>

<div className='mt-5' style={{display:"flex",justifyContent:"center" , alignContent:"center" ,gap : "2rem"}} >
{/* <button  variant="outlined"  className='buttonSubmit ' onClick={goToDeletePage} style={{width : "20rem",display:"flex",justifyContent:"center" , alignContent:"center",borderRadius:"1rem" }}> Delete </button> */}
<button  variant="outlined"  className='buttonSubmit ' onClick={gback} style={{width : "20rem",display:"flex",justifyContent:"center" , alignContent:"center",borderRadius:"1rem" }}> Mark As Complete </button>
</div>
      </div>
      
    </>
  );
}
