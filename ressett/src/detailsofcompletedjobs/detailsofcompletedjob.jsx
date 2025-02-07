import * as React from 'react';
import "./deetailsofcompletedjobs.css"
import { useNavigate } from "react-router-dom";

export default function DetailOfcompletedJobs() {
  const navigate = useNavigate();
       
  const goToDeletePage = () => {
    navigate("/radha/assignorders/completedjobs/details/delte");
  };
  const gotoDeletePage = () => {
    navigate("/radha/assignorders/completedjobs/details/Back");
  };
return (
    <>
      <h1 className='deliveryDetails mt-4' style={{display:"flex" , justifyContent:"center"}} ><b> Delivery Details</b> </h1>
      <div style={{padding :"3rem"}}>
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

<div className='mt-5' style={{display:"flex",justifyContent:"center" , alignContent:"center" , alignItems:"center",textAlign:"center" ,backgroundColor:"",width :"90%"}} >
<div className='' style={{display:"flex",padding : "2rem",justifyContent:"center" , alignContent:"center" ,gap : "2rem"}} >
<button  variant="outlined"  className='buttonSubmit ' onClick={goToDeletePage} style={{width : "6rem",padding:"1rem" , display:"flex",justifyContent:"center" , alignContent:"center",borderRadius:"1rem" }}> Delete </button>
<button  variant="outlined"  className='back '  onClick={gotoDeletePage}  style={{width : "6rem",padding:"1rem",display:"flex",justifyContent:"center" , alignContent:"center" ,borderRadius:"1rem" }}> Back </button>
</div>

</div>
      </div>
      
    </>
  );
}
