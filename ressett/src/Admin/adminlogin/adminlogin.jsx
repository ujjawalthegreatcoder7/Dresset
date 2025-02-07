import ressetlogo from "../assetsadmin/ressetadminlogo.png"
// import "./loginpage.css"
import React from 'react';
import { useNavigate } from "react-router-dom";



function AdminLogin() {
   const navigate = useNavigate();
         
    const Gotopendingcompledjobssection = () => {
      navigate("/radha/pendingcompletesection");
    };
  return (
    <>
    <form  method="POST"     >

    <div className="logo mt-5 "   style={{ display:"flex" , justifyContent:"center" , alignContent:"center" }}  >
      <img src={ressetlogo} className="logoo" style={{ width : "40%"}} ></img>
      </div>

<div style={{ padding: "4rem"  }} className="" >
<label htmlFor="formGroupExampleInput" style={{}} className="form-label form label">Enter your I.D</label>
  <div className="mb-3 form ">
    <input 
      type="text" 
      required
    //   style={{ width : "60%"}} 
      className="form-control  input textoutline" 
      id="formGroupExampleInput input " 
      placeholder="Admin@7777" 
    />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <label htmlFor="formGroupExampleInput2"  style={{}}  className="form form-label mt-5 label ">Enter your Password</label>
  <div className="mb-3 form">
    <input 
      type="text" 
      required
    //   style={{ width : "60%"}} 
      className="form-control input textoutline " 
      id="formGroupExampleInput2 input" 
      placeholder="Dresset@98977" 
    />
  </div>
  <div class="d-grid mt-5 gap-2 col-6 mx-auto">
    
  <button class="btn " onClick={Gotopendingcompledjobssection} style={{backgroundColor:"orange"}} type="button">Get Started</button>
  {/* <button class="btn btn-primary" type="button">Button</button> */}
</div>
</div>
</form>
    </>
  )
}

export default AdminLogin ;
