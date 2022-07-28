import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";
import {Header} from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState,useEffect } from "react";
import axios from "axios"
import { Breadcrumb} from 'antd';
import { Pagination } from "./Pagination";




export const Greyhounds = ()=>{

  const [detail,setDetail] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const getdata = async()=>{

    const res = await axios.get("https://api.sheety.co/0c0bc2828e2abc80b15460bd2b8c43e9/horsetips/sheet2")
    let finaldata = await res.data.sheet2
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
   <Timetable detail = {currentRecords}/> 
  
   <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

  <Footer/>
  
    </>
  )
}