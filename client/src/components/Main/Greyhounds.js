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
import moment from "moment";


export const Greyhounds = ()=>{

  const [detail,setDetail] = useState([])
  const [loading, setLoading] = useState(true);
  const [todayrace, setTodayRace] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const getdata = async()=>{

    const res = await axios.get("https://script.google.com/macros/s/AKfycbwYRAwed4AU7R2q62na51ele3njePVqe_IGYf6JTDEtP1PKhhZPrJfExVea_Ulo98Iw/exec")
    let finaldata = await res.data.data
    finaldata.map((items,index)=>{
      
      items.RaceDate = new Date(items.RaceDate).toLocaleDateString()
      items.id = index
      items.minutes = new Date(items.RaceTime).getMinutes()

    })
    console.log(finaldata)


    const filterdate = finaldata.filter((items,index)=>{
      const currentday = new Date()
      const currentdaystring = new Date(currentday).toLocaleDateString()
return(
  items.RaceDate===currentdaystring&&index<7&&items.minutes>new Date().getMinutes()
)
    })
    console.log(filterdate)
    setTodayRace(filterdate)
  
   

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
    <Breadcrumb.Item>
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

{

todayrace.map((items, index) => {

  const minutesnow = new Date().getMinutes()
  const minutesprev = moment(items.RaceTime).get('minute')
  const inminutes = minutesprev-minutesnow
  console.log(inminutes)
 const trimlocation = items.RaceLocation.replace(/ +/g, "")
  

  return (
    <>
    <div className="tip-grid">
        <div className="tips-colum1">
          <img src="../left-Vector.png" alt="iage" />
        </div>
        <div className="tips-colum1">
          <h3>{items.RaceLocation}</h3>
          <div className="space">
            <Link to={`/greydetails/${items.id}/${trimlocation}`}>
              <button className="btn freebt-2">
                Race {items.RaceNumber}
              </button>
            </Link>
            <p>in {inminutes} Minute</p>
          </div>
      </div>
        </div>
    </>
  );
})
}

                       
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
   <Timetable loading = {loading} detail = {detail}/> 
  
   <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

  <Footer/>
             </>
  

  )
}