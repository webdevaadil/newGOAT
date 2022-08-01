import React, { useDebugValue, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Sports.css"
import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";
import { Breadcrumb } from 'antd';
import { Records } from "./Records";
import axios from 'axios'
import { Pagination } from "./Pagination";
import { apidata } from "../../actions/apiAction";
import { useDispatch,useSelector } from "react-redux";

export const Thoroughbreds=()=>{

  const [detail,setDetail] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const getdata = async()=>{

    const res = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=JxTR_CmO6LOwDEY7gYj8mh-6N5klsFTfRxZBd1zAUaSlLfloCVG1VYeAl4mKdepsjisvchrhrId-zj_OKuJ8Ztfr9h0fILoXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM5Ekl7EwoTMsxbGD7Mk6JPN3Ls7Oyxjmrsr3ZQwRD52M_vMAqczDkXfnrBBGFFHff8VMKaSWAE-WxUrUSiQwyHxctBCURm4-9z9Jw9Md8uu&lib=MBii240CyOZU5TRkVZr_iMkwZJcFcrlZl")
    let finaldata = await res.data.data
   setDetail(finaldata)

  }
  useEffect(()=>{

    getdata()
  },[])

  const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = detail.slice(indexOfFirstRecord, indexOfLastRecord);
const nPages = Math.ceil(detail.length / recordsPerPage)
console.log(currentRecords)


    return (
    
    <>
    <Header/>
    <div id="sport-sec">        
            {/* <div className="container"> */}
            <Breadcrumb separator=">">
    <Breadcrumb.Item  >
    <Link to="/" >Home</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
    <Link to="/Thoroughbreds" >Sports</Link>

    </Breadcrumb.Item>
    <Breadcrumb.Item >
 <Link style={{color:"#10867F"}} to = "/thoroughbreds">
 Thoroughbreds
 </Link>
    </Breadcrumb.Item>
  </Breadcrumb>
           
        </div>


        <div>    
        <div className='container-fluid' id='freetip-sec'>
          <div className='container section'>
          <h3 className="free-title">Races Up Next</h3>
          </div>
          <div className='container main-freetips'>
            <div className='main_1'>             
              <div className='main-grid 1'>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <Link to = "/horsedetails" > <button className='btn'>Race 1</button></Link>
                    <p>In 2 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Flemington, VIC</h3>
                  <div className='space'>
                  <Link to = "/horsedetails" > <button className='btn'>Race 2</button></Link>

                    <p>In 3 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Ascot, WA</h3>
                  <div className='space'>
                                    <Link to = "/horsedetails" > <button className='btn'>Race 3</button></Link>

                    <p>In 4 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Warwick, NSW</h3>
                  <div className='space'>
                                    <Link to = "/horsedetails" > <button className='btn'>Race 4</button></Link>

                    <p>In 5 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Eaglefarm, QLD</h3>
                  <div className='space'>
                  <Link to = "/horsedetails" > <button className='btn'>Race 5</button></Link>

                    <p>In 6 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Belmont, WA</h3>
                  <div className='space'>
                                    <Link to = "/horsedetails" > <button className='btn'>Race 6</button></Link>
                    <p>In 6 minutes</p>
                  </div>
                 </div>
              </div>             
            </div>
            </div>
            <div className='main_1'>
              <div className="upraces-img">
               <img src="/races.png" />
             </div>  
            </div>
          </div>
        </div>
      </div>


      
<div>
<div className='container-fluid raceup-sec'>
          <div className='container'>
            <h3 className="free-title">Today, 04 Aug 2021</h3>
            <div className='upcomming-table'>
            <table>

              <tbody>
              <tr>
                  <th className='first-border'>Track Namey</th>
                  <th>Time</th>
                  <th>Race No.</th>
                  <th>Favourite No.</th>
                  <th className='first-border2'>Win Odds</th>
                </tr>
                <tr>
                  <td>Flemington, VIC</td>
                  <td> 9:00 AM</td>
                  <td>1</td>
                  <td> 5</td>
                  <td>6.7</td>  
                </tr>
                <tr>
                <td>Ascot, WA</td>
                  <td> 11:00 AM</td>
                  <td>3</td>
                  <td> 2</td>
                  <td>3.6</td>  
                </tr>
                <tr>
                <td>Belmont, WA</td>
                  <td> 4:30 PM</td>
                  <td>6</td>
                  <td> 4</td>
                  <td>6.2</td>   
                </tr>
                <tr>
                  <td>Eaglefarm, QLD</td>
                  <td> 11:20 AM</td>
                  <td>3</td>
                  <td> 6</td>
                  <td>5.9</td>  
                </tr>
                <tr>
                <td>Morphetville, SA</td>
                  <td> 3:30 PM</td>
                  <td>4</td>
                  <td> 11</td>
                  <td>8.1</td>  
                </tr>
                <tr>
                <td>Doomben, QLD</td>
                  <td> 5:00 PM</td>
                  <td>7</td>
                  <td> 4</td>
                  <td>4.2</td>  
                </tr>
                <tr>
                <td>Warwick, NSW</td>
                  <td> 10:30 AM</td>
                  <td>3</td>
                  <td> 7</td>
                  <td>6.5</td>  
                </tr>   
              </tbody>
                       
              </table>
            </div>
          </div>
        </div>
</div>
      
      <Records detail={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

    
<Footer/>
    </>
    )
  
}

