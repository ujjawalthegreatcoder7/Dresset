import * as React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Deliveryboy() {
    return(
        <>
        <div style={{width : "100%"   }}  >
    <b className="" style={{fontFamily: "'Open Sans', sans-serif"}} >Create New Dlivery Boy</b>

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
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Delivery Boy I.D"></input>
  </div>
  <div class="col-12 mt-3">
    {/* <label for="inputAddress" class="form-label">Address</label> */}
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Delivery Boy Password"></input>
  </div>

</div>
    </div>
    <div>
        <div className='mt-4'>
    <b  > See Current Delivery Boy </b>
    </div>
    <div className='content1 mt-2' >
        <div>
        <h1> Delivery Boy 1 </h1>
        <b> Delivery Boy I.D: </b> 01-01-2005
        <br></br>
        <b> Delivery Boy Password : </b> Customer
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
        <h1> Delivery Boy 1 </h1>
        <b> Delivery Boy I.D: </b> 01-01-2005
        <br></br>
        <b> Delivery Boy Password : </b> Customer
        </div>
        <div className='mt-2' style={{display:"block"}} >
        <button type="button" class="btn btn-warning"><CreateIcon/></button>
        <br  className='mt-2'  ></br>
        <button type="button" class="btn btn-warning mt-4"><DeleteIcon/></button>

    </div>

    </div>


    <div className='content1 mt-2' >
        <div>
        <h1> Delivery Boy 1 </h1>
        <b> Delivery Boy I.D: </b> 01-01-2005
        <br></br>
        <b> Delivery Boy Password : </b> Customer
        </div>
        <div className='mt-2' style={{display:"block"}} >
        <button type="button" class="btn btn-warning"><CreateIcon/></button>
        <br  className='mt-2'  ></br>
        <button type="button" class="btn btn-warning mt-4"><DeleteIcon/></button>

    </div>

    </div>



    </div>
        </>
    )
}