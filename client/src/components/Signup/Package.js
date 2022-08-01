import React from 'react'
import "./Package.css"
import Select from 'react-select'
import img1 from "../../Images/level.png"
import img2 from "../../Images/name1.png"
import img3 from "../../Images/name2.png"
import img4 from "../../Images/name3.png"
import img5 from "../../Images/name4.png"

export const Package = () => {

  const options = [
    { value: '$60 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}} src={img1} />$60 / week</div> },
    { value: '$45 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img2} />$45/ week</div> },
    { value: '$30 / week', label:<div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img3} />$30/ week</div>  },
    { value: '$15 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img4} />$15/ week</div>  },
    { value: 'Free', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img5} />Free</div> },
  ];

  const customStyles ={
    height:45
  }



  return (
    <>

<div class="container-fluid form-section wel-form">        
            <div class="col-md-6">
                    <div class="wel-p1 pack-main">
                       
                      </div>
                </div>
                <div class="col-md-6">
                    <div class="wel-p1 wel-bg">              
                        <div class="row form-content">                 
                        <h2>Packages</h2>
                        <div class="form-main"> 
                              <form class="form-floating mb-3">
                                <div class="form-floating">

<Select
defaultValue="Select"
options={options} 
styles = {customStyles}
/>
                                                      </div>
                                <h4 class="mt-4">Payment Details</h4>
                                <div class="form-floating mb-3">
                                  <input type="Name" class="form-control" placeholder="J Done"/>
                                  <label for="floatingInput">Name on Card</label>
                                </div>        
                                <div class="form-floating mb-3">
                                  <input type="Card" class="form-control" placeholder="123 456 791 23"/>
                                  <label for="floatingInput">Card Number</label>
                                </div>  
                                <div class="form-inner">
                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" placeholder="dd/mm/yyyy"/>
                                          <label for="floatingInput">Expiry</label>
                                    </div> 
                                    <div class="form-floating">
                                      <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="myInput" placeholder="*******"/>
                                        <i class="fa fa-eye" onclick="myFunction()"></i>
                                        <label for="floatingPassword">CVV</label>
                                      </div>
                                    </div>                        
                                   
                                  </div>  
                              </form>                     
                              <div class="fom-btn mb-3">                        
                                <button type="submit" class="btn btn-outline-secondary">Sign Up</button>
                                <button type="login" class="btn btn-outline-secondary">Login</button>
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
