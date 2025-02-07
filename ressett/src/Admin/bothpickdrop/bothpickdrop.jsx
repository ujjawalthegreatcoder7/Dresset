import { useNavigate } from "react-router-dom";


export default function BothPickDrop(){
    const navigate = useNavigate();
             
    const Gotodrop = () => {
      navigate("/radha/pendingcompletesection/completeddroppickup");
    };
    return(
        <>
        <h1> RADHA </h1>
        <h4> Both pick drop </h4>

        <button onClick={Gotodrop} > Mark As Complete </button>
        </>
    )
}