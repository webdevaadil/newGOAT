import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { Loginbtn } from "./Loginbtn";
export const Header = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state);

  const[show,setShow] = useState(false)

console.log(user)

  const navigate = useNavigate();


  return (
    <>
          <div className="container-fluid Mainheader">      
        <nav className="container navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><img src="../logo.png" alt="this" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to= "/" className="nav-link" >HOME</Link>
                </li>
                <li className="nav-item">
                  <div onClick={()=>{setShow(!show)}} style = {{color:"white",cursor:"pointer"}} className="nav-link">SPORTS</div>
                  {show&&
                    <div style = {{zIndex:"1",width:"232px",height:"160px" ,gap:"24px",position:"absolute",left:"26%"}} className="card">
                      <div className="card-body"> 
                      <div >
                   <img src="/Vector.png" alt="" />
                    <Link style ={{fontSize:"15px"}}   onClick={()=>setShow(!show)} to = "/thoroughbreds">Throughbreds</Link>
                      </div>
                  <br/>
                  <div  >
                     <img src="left-Vector.png" alt="" />
                    <Link style ={{fontSize:"15px"}}  onClick={()=>setShow(!show)}  to = "/greyhounds">Greyhounds</Link>
                  </div>
                      </div>
                  </div>}
                </li>    
            
              </ul>
             
        <Loginbtn/>
            </div>
          </nav>
        </div>
      
    </>
  );
};
