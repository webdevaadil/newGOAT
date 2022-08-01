import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import axios from "axios";
import { Breadcrumb } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import { apidata } from "../../actions/apiAction";

export const HorseDetails = ()=>{
    const dispatch = useDispatch()

    const {data,error,loading,isAuthenticated} = useSelector((state)=>state.data)


    const getapidata = async()=>{
       
   dispatch(apidata())

    }

useEffect(()=>{

    getapidata()

},[dispatch])



    

  return(
      <>  
      <Header/>    
      <div id="sport-sec">        
      <Breadcrumb separator=">">

    <Breadcrumb.Item >
    <Link to="/Thoroughbreds" >Thoroughbreds</Link>

    </Breadcrumb.Item>
    <Breadcrumb.Item >
 <Link style={{color:"#10867F"}} to = "/thoroughbreds">
 Details
 </Link>
    </Breadcrumb.Item>
  </Breadcrumb>
        </div>  
        <div>
        <div className="container-fluid details-sec">
           <div className="container mt-3">
           <div  className="row">
                <div className="col-lg-12 col-width">
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

            </div>
            </div>
            </div>
        </div>        
<Footer/>
    </>
  )
}