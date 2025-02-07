import * as React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default function Merchants() {

     const navigate = useNavigate();
           
      const Gotopendingcompledjobssection = () => {
        navigate("/radha/adminlogin");
      };

    return(
        <>
        <div style={{width : "100%"   }}  >
    <b className="" style={{fontFamily: "'Open Sans', sans-serif"}} >Create New Merchants</b>

    <div className=''  style={{display:"flex",justifyContent:"center",alignContent:"center"}} >
   
    <div class="row">
  <div class="col mt-3">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
  </div>
  <div class="col mt-3">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
  </div>

  <div class="col-12 mt-3">
    {/* <label for="inputAddress" class="form-label">Address</label> */}
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Merchant1 I.D"></input>
  </div>
  <div class="col-12 mt-3">
    {/* <label for="inputAddress" class="form-label">Address</label> */}
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Merchant1 Password"></input>
  </div>

</div>
    </div>
    <div>
        <div className='mt-4'>
    <b  > See Current Merchants </b>
    </div>
    <div className='content1 mt-2' >
        <div>
        <h1> Merchant1 </h1>
        <b> Merchant1 I.D: </b> 01-01-2005
        <br></br>
        <b> Merchant1 Password : </b> Customer
        </div>
        <div className='mt-2' style={{display:"block"}} >
        <button type="button" class="btn btn-warning"><CreateIcon/></button>
        <br  className='mt-2'  ></br>
        <button type="button" class="btn btn-warning mt-4"><DeleteIcon/></button>

    </div>

    </div>
</div>


<div className='content1 mt-2' >
        <div>
        <h1> Merchant1 1 </h1>
        <b> Merchant1 I.D: </b> 01-01-2005
        <br></br>
        <b> Merchant1 Password : </b> Customer
        </div>
        <div className='mt-2' style={{display:"block"}} >
        <button type="button" class="btn btn-warning"><CreateIcon/></button>
        <br  className='mt-2'  ></br>
        <button type="button" class="btn btn-warning mt-4"><DeleteIcon/></button>

    </div>

    </div>


    <div className='content1 mt-2' >
        <div>
        <h1> Merchant1 1 </h1>
        <b> Merchant1 I.D: </b> 01-01-2005
        <br></br>
        <b> Merchant1 Password : </b> Customer
        </div>
        <div className='mt-2' style={{display:"block"}} >
        <button type="button" class="btn btn-warning"><CreateIcon/></button>
        <br  className='mt-2'  ></br>
        <button type="button" class="btn btn-warning mt-4"><DeleteIcon/></button>

    </div>

    </div>
<div  style={{justifyContent:"center" ,display:"flex"}} >
    <button onClick={Gotopendingcompledjobssection} type="button" class="btn btn-warning mt-4"> Move to admin Login Page this button is temporary </button>
</div>

    </div>
        </>
    )
}