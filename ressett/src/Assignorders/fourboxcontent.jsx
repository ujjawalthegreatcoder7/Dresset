import * as React from 'react';
import "./fourboxContent.css"
import { useNavigate } from "react-router-dom";

export default function FourBoxcontent() {
 
    
        const navigate = useNavigate();
      
        const goToAboutPage = () => {
          navigate("/radha/assignorders/completedjobs/details");
        };
      
  return (
    <>
<div>
    <div className='content1' >
        <div>
        <h1> Delivery Boy 1 </h1>
        <b> Job Date : </b> 01-01-2005
        <br></br>
        <b> Pick-Up from : </b> Customer
        <br></br>
        <b> Payment Status </b> Paid
        <br></br>
        </div>
        <div className='mt-2' >
      <button onClick={goToAboutPage} type="button" class="btn btn-warning">Check Details</button>
    <br  className='mt-2 '  ></br>
    <b className='mt-3 drop'> Drop To : </b> Merchant
        <br></br>
        <b> Cloh Count : </b> 12
        <br></br>

    </div>

    </div>
</div>


<div>
    <div className='content1 mt-3' >
        <div>
        <h1> Delivery Boy 1 </h1>
        <b> Job Date : </b> 01-01-2005
        <br></br>
        <b> Pick-Up from : </b> Customer
        <br></br>
        <b> Payment Status </b> Paid
        <br></br>
        </div>
        <div className='mt-2' >
    <button type="button" class="btn btn-warning">Warning</button>
    <br  className='mt-2 '  ></br>
    <b className='mt-3 drop'> Drop To : </b> Merchant
        <br></br>
        <b> Cloh Count : </b> 12
        <br></br>

    </div>

    </div>
</div>



<div>
    <div className='content1 mt-3' >
        <div>
        <h1> Delivery Boy 1 </h1>
        <b> Job Date : </b> 01-01-2005
        <br></br>
        <b> Pick-Up from : </b> Customer
        <br></br>
        <b> Payment Status </b> Paid
        <br></br>
        </div>
        <div className='mt-2' >
    <button type="button" class="btn btn-warning">Warning</button>
    <br  className='mt-2 '  ></br>
    <b className='mt-3 drop'> Drop To : </b> Merchant
        <br></br>
        <b> Cloh Count : </b> 12
        <br></br>

    </div>

    </div>
</div>



<div>
    <div className='content1 mt-3' >
        <div>
        <h1> Delivery Boy 1 </h1>
        <b> Job Date : </b> 01-01-2005
        <br></br>
        <b> Pick-Up from : </b> Customer
        <br></br>
        <b> Payment Status </b> Paid
        <br></br>
        </div>
        <div className='mt-2' >
    <button type="button" class="btn btn-warning">Warning</button>
    <br  className='mt-2 '  ></br>
    <b className='mt-3 drop'> Drop To : </b> Merchant
        <br></br>
        <b> Cloh Count : </b> 12
        <br></br>

    </div>

    </div>
</div>
    </>
  );
}
