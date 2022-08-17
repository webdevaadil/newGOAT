import React from 'react'
import './Home.css';
import img1 from "../../Images/GOAT_logo.png"
import img2 from "../../Images/gold.png"
import img3 from "../../Images/platinum.png"
import img4 from "../../Images/silver.png"
import img5 from "../../Images/bronze.png"
import races from "../../Images/races.png"
import races1 from "../../Images/races1.png"
import icon from "../../Images/icon.png"
import icon2 from "../../Images/icon2.png"
import horseRacing from "../../Images/Horse-Racing.jpg"
import horseIcon from  "../../Images/horse-icon.png"
import greyRacing from "../../Images/Greyhound-Racing.jpg"
import houndIcon from  "../../Images/hound-icon.png"
import reliable from "../../Images/freetips-mobile.png"
import HomeHeader from '../Header/HomeHeader';
import HomeFooter from '../Footer/HomeFooter';
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>  
      <HomeHeader/>      
      <div className='banner-sec'>
        <div className='container her0'>
          <div className='row banner-main'>
            <div className='col-lg-8 col-md-12'>
              <div className='baner-ct'>
                <img src={img1}/>
                <div className='bnner-btn'>
                  <Link to = "/signup">
                  <button className='signbtn'>Signup</button>
                  </Link>
                </div>
                <h2><span>Win Better</span> with <br></br> The GOAT's Tips</h2>
                <p>A sports tipping service that consistently delivers a positive return on investment for its clients. 
                  The GOAT's Tips utilises the latest technology and artificial intelligence to improve returns, frequency, 
                  and betting experience. We create smarter betters who treat gambling as an investment.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='baner-img'
              ></div>
            </div>
          </div>
        </div>
        </div> 

        <div className='tips-sec'>
          <div className='container tips-main'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='tips-ct'>
                  <h2> &#62;6,000</h2>
                  <p>Tips Sent</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='tips-ct brde'>
                  <h2> &#62;37%</h2>
                  <p>Tips Sent</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='tips-ct'>
                  <h2> 400+</h2>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div className='result'>
           <div className="container result-mian">
              <div className="section-title">
                <h3>Reliable Results</h3>
              </div>

              <div className='hor-list'>
                <ul>
                  <li>Horse Racing</li>
                  <li>Greyhound Racing</li>
                </ul>
              </div>

              <div className="rate">
                <div className='row rate-mian'>
                  <div className='col-md-4 col-sm-4'>
                    <h3>37%</h3>
                    <p>Win strike rate</p>
                  </div>
                  <div className='col-md-4 col-sm-4'>
                    <h3>$2.90</h3>
                    <p>Average winning odds</p>
                  </div>
                  <div className='col-md-4 col-sm-4'>
                    <h3>56%</h3>
                    <p>Top 2 place rate</p>
                  </div>
                </div>
              <div className='container-fluid'>
              <div className="row tips-mian">
                <div className='col-lg-6 col-md-12'>
                  <div className="resut-content">
                    <h3>Quality Sporting Tips <span>From Expert Tipsters</span> </h3>
                    <p>Whether you're a professional investor or a casual pub punter, we've got you covered. The GOAT's Tips provides
                       consistent returns to enhance your sporting experience.</p>
                    <ul>
                      <li> <i class="fa fa-check"></i> Thoroughbred horse racing</li>
                      <li> <i class="fa fa-check"></i> Greyhound racing</li>
                      <li> <i class="fa fa-check"></i> Additional sports coming soon!</li>

                    </ul>   
                  </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                  <div className="resut-content">
                 <div className="card card1">
                 <div class="clearfix">
                      <button type="button" class="btn  float-start">
                      <img src={icon}/> The Goats tips
                      </button>
                      <button type="button" class="btn  float-end"> <img src={icon2}/> No. 4</button>
                   </div>
                   <p>Whether you're a professional investor or a casual pub punter, we've got you covered. The GOAT's
                     Tips provides consistent returns to enhance your sporting experience.</p>
                     <p>Whether you're a professional investor or a casual pub punter, we've got you covered. The GOAT's
                     Tips provides consistent returns to enhance your sporting experience.</p>
                 </div>
                 <div className="card card1">
                 <div class="clearfix">
                      <button type="button" class="btn  float-start">
                      <img src={icon}/> The Goats tips
                      </button>
                      <button type="button" class="btn  float-end"> <img src={icon2}/> No. 4</button>
                   </div>
                   <p>Whether you're a professional investor or a casual pub punter, we've got you covered. The GOAT's
                     Tips provides consistent returns to enhance your sporting experience.</p>                    
                 </div>
                 <div className="card card1">
                 <div class="clearfix">
                      <button type="button" class="btn  float-start">
                      <img src={icon}/> The Goats tips
                      </button>
                      <button type="button" class="btn  float-end"> <img src={icon2}/> No. 4</button>
                   </div>
                   <p>Whether you're a professional investor or a casual pub punter, we've got you covered. The GOAT's
                     Tips provides consistent returns to enhance your sporting experience.</p>
                     <p>Whether you're a professional investor or a casual pub punter, we've got you covered. The GOAT's
                     Tips provides consistent returns to enhance your sporting experience.</p>
                 </div>
                  </div>
                </div>
              </div>
              </div>
              </div>  
             
          </div>
        </div>
        <div className='Reliable-sec'>
                <div className='container'>
                  <div className='row reliav-main'>
                    <div className='col-md-6'>
                      <div className='reliable-img'>
                      <img src={reliable}/>
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='reliable-cont'>
                      <h3>Reliable Tips at <br></br> Your Fingertips</h3>
                      <p>All tips are sent directly to your inbox the morning of the sporting event, along with rationale 
                        for the selections.</p>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <div className='Reliable-sec relai2'>                
                <div className='container'>
                  <div className='row reliav-main'>
                  <div className='col-md-6'>
                      <div className='reliable-cont'>
                      <h3>Artificial Intelligence Used to Improve Your Returns!</h3>
                      <p>The GOAT's Tips uses artificial intelligence to plough through millions of datapoints to ensure
                         only the most reliable tips arrive in your inbox.</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='reliable-img'>  
                       <div className='mob-img'>
                       <img src={races1}/>
                        </div>        
                      </div>
                    </div>                    
                  </div>
                </div>
        </div>
        <div className='tipping-sec' >       

        <div className='tippimg-main' id='tiping'> 
        <div className='section-title'>
            <h3>Tipping Packages for Everyone</h3>
            <p>Choose the package that suits your favourite sport, confidence level, and budget - we've got the right one for you!</p>
            <h4> <span>Thoroughbred Horse Racing</span></h4>
          </div>     
          <div className='row tipping1'>
            <div className='col-md-6'>
             <div className='tipp-img'>
             <img src={img5}/>
             </div>
            </div>
            <div className='col-md-6'>
              <div className='tipping-ct'>
                <h3>Bronze</h3>
                <p>$15 / Week</p>
                <div className='return'>
                 <span>98% returns</span> 
                </div>
                <ul className='tiip-list'>
                  <li> <i class="fa fa-check"></i> Top tip of the day</li>
                  <li><i class="fa fa-check"></i> Every Saturday</li>
                  <li> <i class="fa fa-check"></i>Free and direct to your inbox</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row tipping1'>
            <div className='col-md-6'>
             <div className='tipp-img'>
             <img src={img4}/>
             </div>
            </div>
            <div className='col-md-6'>
              <div className='tipping-ct'>
                <h3>Silver</h3>
                <p>$30 / Week</p>
                <div className='return'>
                 <span>120% returns</span> 
                </div>
                <ul className='tiip-list'>
                  <li> <i class="fa fa-check"></i> Our 10 best tips</li>
                  <li><i class="fa fa-check"></i>Every Saturday</li>
                  <li> <i class="fa fa-check"></i>Direct to your inbox</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row tipping1'>
            <div className='col-md-6'>
             <div className='tipp-img'>
             <img src={img2}/>
             </div>
            </div>
            <div className='col-md-6'>
              <div className='tipping-ct'>
                <h3>Gold</h3>
                <p>$45 / Week</p>
                <div className='return'>
                 <span>165% returns</span> 
                </div>
                <ul className='tiip-list'>
                  <li> <i class="fa fa-check"></i>Our top daily tips, plus</li>
                  <li><i class="fa fa-check"></i>Our top 15 Saturday tips</li>
                  <li> <i class="fa fa-check"></i>Direct to your inbox</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row tipping1'>
            <div className='col-md-6'>
             <div className='tipp-img'>
             <img src={img3}/>
             </div>
            </div>
            <div className='col-md-6'>
              <div className='tipping-ct'>
                <h3>Platinum</h3>
                <p>$60 / Week</p>
                <div className='return'>
                 <span>265% returns</span> 
                </div>
                <ul className='tiip-list'>
                  <li> <i class="fa fa-check"></i> Our top 5 daily tips, plus</li>
                  <li><i class="fa fa-check"></i> Our top 20 Saturday tips</li>
                  <li> <i class="fa fa-check"></i>Direct to your inbox</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='bnner-btn'>
                  <button className='signbtn'>Sign Me Up</button>
                </div>
        </div>         
        </div>

        <div className='Services-sec'>
          <div className='container'>
            <div className='section-title'>
              <h3>Services Provided</h3>           
            </div>
            <div className='row service-main'>
              <div className='col-md-6'>
              <div className='service-img2'>          
              <img src={horseRacing} alt="img"/>
              </div>
              </div>
              <div className='col-md-6'>
                <div className='service-ct'>
                  <div className='ser-img'>
                  <img src={horseIcon} alt="img" />
                  </div>
                  <h3>Horse Racing Tips</h3>
                  <p>Our eyes are always on the track to ensure we get the inside rail on the winning tips sent out.</p>
                </div>
              </div>
            </div>

            <div className='row service-main'>
              <div className='col-md-6'>
              <div className='service-img2'>
              <img src={greyRacing} alt="img"/>
              </div>
              </div>
              <div className='col-md-6'>
                <div className='service-ct'>
                  <div className='ser-img'>
                  <img src={houndIcon} alt="img"/>
                  </div>
                  <h3>Horse Racing Tips</h3>
                  <p>Our eyes are always on the track to ensure we get the inside rail on the winning tips sent out.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='follw-sec'>
          <div className='container'>
            <div className='foll-ct'>
              <h3>Follow Us on our Socials</h3>
            </div>
            <ul className='socil-link'>
              <li><i class="fa fa-facebook-f"></i></li>
              <li><i class="fa fa-twitter"></i></li>
              <li><i class="fa fa-instagram"></i></li>
            </ul>
          </div>
        </div>

        <div className="nesletter-sec">
          <div className='container'>
            <div className="row news-main">
              <div className="col-md-8">
                <div className="mes-cont">
                  <h4>Latest News From A Winning Team</h4>
                  <p>Sign up to our newsletter to keep your ear to the wall with our latest offers, products, and industry news.
</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mesbtn">
                <form>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email Address"  aria-describedby="emailHelp"/>                    
                  </div>                 
                  <button type="submit" class="btn form-btn">Submit</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='testimpnal-sec'>
        
        <div className='container'>
        <div className='section-title'>
              <h3>Testimonials</h3>           
            </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <h4>I started on Bronze, moved up to Silver, then Gold and now Platinum – winning all the way!</h4>
            <div className='cont'>
              <div className='rating'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              </div>
              <h3>Trent Davies</h3>
              <p> <span>Thoroughbred Horses - Platinum Subscription</span></p>
            </div>      
          </div>
          <div className="carousel-item">
          <h4>I started on Bronze, moved up to Silver, then Gold and now Platinum  winning all the way!</h4>
            <div className='cont'>
              <div className='rating'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              </div>
              <h3>Trent Davies</h3>
              <p><span>Thoroughbred Horses - Platinum Subscription</span></p>
            </div>
          </div>
          <div className="carousel-item">
          <h4>I started on Bronze, moved up to Silver, then Gold and now Platinum – winning all the way!</h4>
            <div className='cont'>
              <div className='rating'>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              </div>
              <h3>Trent Davies</h3>
              <p> <span>Thoroughbred Horses - Platinum Subscription</span></p>
            </div>
          </div>
        </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
          </div>
        </div>
        </div>

        <div className="wiinner-sec">
          <div className='container'>
            <div className="winner-main">
              <h3>Become a Winner Now!</h3>
              <p>Join us in backing daily winners with a subscription tailored to your preferences.</p>
              <div className='bnner-btn'>
                  <button className='signbtn'>Sign Me Up</button>
                </div>
            </div>
          </div>
        </div>
        <HomeFooter/>
    </div>
  )
}

export default Home