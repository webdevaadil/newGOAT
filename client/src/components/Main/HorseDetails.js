import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import axios from "axios";




export const HorseDetails = ()=>{





  return(
      <>  
      <Header/>    
      <div id="sport-sec">        
            <div className="container">
            <nav aria-label="breadcrumb" className="section-banner">
                <ol className="breadcrumb">
                    <Link to="/Thoroughbreds" className="breadcrumb-item"><a href="#">Thoroughbreds</a></Link>
                    <Link to="/" className="breadcrumb-item " aria-current="page">Details</Link>
                </ol>
             </nav>
            </div>
        </div>  
        <div>
        <div className="container-fluid details-sec">
           <div className="container mt-3">
           <div className="row">
                <div className="col-md-7">
                  <div className="detisl-bg">
                    <img src="/details-bg.png" />
                  </div>
                  <div className="row">
                    <div className="det-des mt-4">
                        <h3>Murray Bridge, SA</h3>
                        <div className="row det-cont mt-2">
                            <div className="col-md-2 ">
                                 <button className='btn det-btn'>Race 2</button>
                            </div>
                            <div className="col-md-3 ">
                                <div className="detail-date">
                                    <p>Today, 04 Aug 2021</p>
                                </div>
                            </div>
                            <div className="col-md-2 ">
                              <div className="detail-time">
                                    <p>9:00 AM</p>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="detail-mt">
                                    <p><img src="/carbon_partly-cloudy.png" />11°C - Cloudy</p>
                                </div>
                            </div>
                            <div className="col-md-2 ">
                                
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className='upcomming-table'>
                        <table>
                            <tr>
                            <th className='first-border'>No.</th>
                            <th>Horse Name</th>
                            <th>Jockey</th>
                            <th>Official Odds</th>
                            <th className='first-border2'> <img src="/Group5.png" alt = "goatimage" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> Casper</td>
                                <td>Egbert Clarkson</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                <td>2</td>
                                <td> Abram</td>
                                <td>Marilyn Saris</td>
                                <td> 2</td>
                                <td>3.6</td>  
                            </tr>
                            <tr>
                            <td>3</td>
                                <td> Skylar</td>
                                <td>Jordyn Press</td>
                                <td> 5</td>
                                <td>5</td>    
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Charlie</td>
                                <td>Giana Press</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                <td>5</td>
                                <td> Gustavo</td>
                                <td>Miracle Siphron</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                <td>6</td>
                                <td> Hanna</td>
                                <td>Egbert Clarkson</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                 <td>7</td>
                                <td>Roger</td>
                                <td>Alfredo Geidt</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>   
                            <tr>
                                 <td>8</td>
                                <td>Cooper</td>
                                <td>Justin Lubin</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr> 
                            <tr>
                                 <td>9</td>
                                <td>Allison</td>
                                <td>Allison</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr> 
                            <tr>
                                 <td>10</td>
                                <td>Kianna</td>
                                <td>Madelyn Dokidis</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>    
                            <tr>
                                 <td>11</td>
                                <td>Kianna</td>
                                <td>Madelyn Dokidis</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>          
                        </table>
                        </div>
                    </div>
                </div> 
                <div className="col-md-5">
                    <div className="right-cln">
                    <div className="row">
                    <div className="card details-crd">
                        <div className="card-body">
                        <a href="#" className="card-link"> <img src="/circle.png" /> The Goat’s Tips</a>
                        <a href="#" className="card-link"><img src="/award.png" /> No. 4</a>
                           <p className="card-text">After being the first locally trained horse in the 2020 Melbourne Cup, Charlie, Australia’s most improved stayer’s 
                          sole focus for this year will be another tilt at Australia’s most famous race.</p>
                          <p>Jockey, Giana Press said with this in mind they don’t intend to tackle weight-for-age races, or set him for a race like the Sydney Cup over
                             autumn, as they don’t want him to rise too much in the Melbourne Cup weights.</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="card details-crd">
                        <div className="card-body">
                        <a href="#" className="card-link"> <img src="/card-img2.png" /> The Goat’s Tips</a>
                        <a href="#" className="card-link"><img src="/award.png" /> No. 4</a>
                           <p className="card-text">Charlie joined the Maher-Eustace stable and graduated from a third in a Wangaratta Maiden at his first start with them to a win in the Melbourne Cup.</p>
                         </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="card details-crd">
                        <div className="card-body">
                        <a href="#" className="card-link"> <img src="/card-img1.png" /> The Goat’s Tips</a>
                        <a href="#" className="card-link"><img src="/award.png" /> No. 4</a>
                           <p className="card-text">In the nine starts between those two runs he had six wins and three seconds. Included in his wins was a victory in The Bart Cummings which gained the son of Pierro a start in the Melbourne Cup..</p>
                          <p>That was his first racing preparation. He was a lightly framed three-year-old when he joined..</p>
                        </div>
                    </div>
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>        
<Footer/>
    </>
  )
}