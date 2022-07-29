import React from 'react'

export const Package = () => {
  return (
    <>

<div class="container-fluid form-section wel-form">        
            <div class="row">
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
                        
                                  <select class="form-select" aria-label="Floating label select example" id="id_select2_example">
                                    <option  value="Required" data-img_src="">Select</option>
                                    <option data-img_src="assets/images/level.png">$60 / week</option>
                                    <option data-img_src="assets/images/name1.png">$45 / week</option>
                                    <option data-img_src="assets/images/name2.png">$30 / week</option>
                                    <option data-img_src="assets/images/name3.png">$15 / week</option>
                                    <option data-img_src="assets/images/name4.png">Free</option>
                                  </select>
                                  
                                 
                                  <label for="floatingSelect">Select Package</label>
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
    </div>

    </>
  )
}
