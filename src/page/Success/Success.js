import "./Success.scss";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Success() {

  const navigate = useNavigate();

  

useEffect(()=>{
 const timer = setTimeout(()=>{
    navigate("/");
  },5000)

  return ()=> clearTimeout(timer)  

},[])



  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="sucess__header">Video uploaded sucessfuly</div>
      <div className="sucess__body">Enjoy our service and donate whatever you like!</div>
      <Link className="sucess__footer" to="/">
      <div className="sucess__footer">Go back to the list of videos</div>
      </Link>
    
      

    </div>
  );
}

export default Success;
