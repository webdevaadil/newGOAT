import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";
import {Header} from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState,useEffect } from "react";
import axios from "axios"
import { Breadcrumb} from 'antd';
import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { apidata } from "../../actions/apiAction";
import { Loader } from "../layout/Loader";


export const Greyhounds = ()=>{

  const [detail,setDetail] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const getdata = async()=>{

    const res = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=jDoChie6LqLG6ElHDz5XnSp5xbRzBGY7boopl67X51Y-MgBXn3qY9IykJM3v2v8gEiKx0RCnFEBRpeCaaI4b-91ukFetCelMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF9OXc95fD23eDvAhF7wtmVRghiF34032X6xCyWzrqMkLu9JIXnQGOCkJaLaMp569JzQoN6xAOTwYcScU6dDSajx9N_XZM_k49z9Jw9Md8uu&lib=MBii240CyOZU5TRkVZr_iMkwZJcFcrlZl")
    let finaldata = await res.data.data
    finaldata.map((items,index)=> items.id = index)
    console.log(finaldata)
   setDetail(finaldata)

   setLoading(!loading)

  }
  useEffect(()=>{

    getdata()
  },[])

  const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = detail.slice(indexOfFirstRecord, indexOfLastRecord);
const nPages = Math.ceil(detail.length / recordsPerPage)
console.log(currentRecords)

  return(
   
         <>
                   <Header/>    
      <div id="sport-sec">        
      <Breadcrumb separator=">">
    <Breadcrumb.Item  >
    <Link to="/" >Home</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
    <Link to="/Thoroughbreds" >Sports</Link>

    </Breadcrumb.Item>
    <Breadcrumb.Item >
 <Link style={{color:"#10867F"}} to = "/greyhounds">
 Greyhounds
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
                 <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, SA</h3>
                  <div className='space'>
                                <Link to = "/greydetails" > <button className='btn freebt-2'>Race 3</button></Link>

                    <p>In 2 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Caulfield, VIC</h3>
                  <div className='space'>
                                <Link to = "/greydetails" > <button className='btn freebt-2'>Race 3</button></Link>

                    <p>In 3 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Doomben, QLD</h3>
                  <div className='space'>
                                <Link to = "/greydetails" > <button className='btn freebt-2'>Race 3</button></Link>

                    <p>In 4 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Warwick, NSW</h3>
                  <div className='space'>
                                <Link to = "/greydetails" > <button className='btn freebt-2'>Race 3</button></Link>

                    <p>In 5 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Eaglefarm, QLD</h3>
                  <div className='space'>
                    <button className='btn freebt-2'>Race 1</button>
                    <p>In 6 minutes</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                 <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Belmont, WA</h3>
                  <div className='space'>
                  <Link to = "/greydetails" > <button className='btn freebt-2'>Race 3</button></Link>

                    <p>In 6 minutes</p>
                  </div>
                 </div>
              </div>             
            </div>
            </div>
            <div className='main_1'>
              <div className="upraces-img">
               <img src="/grayhound-bh.png" alt = "Greyhound image"/>
             </div>  
            </div>
          </div>
        </div>
      </div>
   <Timetable loading = {loading} detail = {currentRecords}/> 
  
   <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

  <Footer/>
             </>
  

  )
}