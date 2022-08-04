
import React from 'react'
import "./Package.css"
import Select from 'react-select'
import img1 from "../../Images/level.png"
import img2 from "../../Images/name1.png"
import img3 from "../../Images/name2.png"
import img4 from "../../Images/name3.png"
import img5 from "../../Images/name4.png"

export const Password = ({ formData, setForm, navigation }) => {
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
  console.log(formData);

  const options = [
    { value: '$60 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}} src={img1 } alt="loading"  />$60 / week</div> },
    { value: '$45 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img2} alt="loading" />$45/ week</div> },
    { value: '$30 / week', label:<div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img3}  alt="loading"/>$30/ week</div>  },
    { value: '$15 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img4} alt="loading" />$15/ week</div>  },
    { value: 'Free', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img5} alt="loading"/>Free</div> },
  ];

  const customStyles ={
    height:45
  }



  return (
    <>

<div className="container-fluid form-section wel-form">        
            <div className="col-md-6">
                    <div className="wel-p1 pack-main">
                       
                      </div>
                </div>
                <div className="col-md-6">
                    <div className="wel-p1 wel-bg">              
                        <div className="row form-content">                 
                        <h2>Packages</h2>
                        <div className="form-main"> 
                              <form className="form-floating mb-3">
                                <div className="form-floating">

<Select
defaultValue="Select"
options={options} 
styles = {customStyles}
/>
                                                      </div>
                                <h4 className="mt-4">Payment Details</h4>
                                <div className="form-floating mb-3">
                                  <input type="Name" className="form-control" placeholder="J Done"/>
                                  <label htmlFor="floatingInput">Name on Card</label>
                                </div>        
                                <div className="form-floating mb-3">
                                  <input type="Card" className="form-control" placeholder="123 456 791 23"/>
                                  <label htmlFor="floatingInput">Card Number</label>
                                </div>  
                                <div className="form-inner">
                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" placeholder="dd/mm/yyyy"/>
                                          <label htmlFor="floatingInput">Expiry</label>
                                    </div> 
                                    <div className="form-floating">
                                      <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="myInput" placeholder="*******"/>
                                        <i className="fa fa-eye" ></i>
                                        <label htmlFor="floatingPassword">CVV</label>
                                      </div>
                                    </div>                        
                                   
                                  </div>  
                              </form>                     
                              <div className="fom-btn mb-3">                        
                                <button type="submit" className="btn btn-outline-secondary">Sign Up</button>
                                <button type="login" className="btn btn-outline-secondary">Login</button>
                              </div>                
                             
                        </div>
                        <p>By signing up, I agree to the <span>Terms and conditions and Privacy policy</span></p>             
        
                    </div>
                </div>
            </div>
 
    </div>

    </>
  )
}
