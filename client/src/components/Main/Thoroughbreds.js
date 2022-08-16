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
import { Loader } from "../layout/Loader";


export const Thoroughbreds=()=>{

  const [detail,setDetail] = useState([])
  const [loading, setLoading] = useState(true);
  const [todayrace, setTodayRace] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const getdata = async()=>{

    const res = await axios.get("https://script.google.com/macros/s/AKfycbzY1VMvhRABm0tIBQxWoTmc_wyDbo-BLL4UzM_qfLfSh9lswfF4j8gc3v5MNTXE5Sr4/exec")
    let finaldata = await res.data.data
    
    
    
    finaldata.map((items,index)=> {
      items.RaceDate = new Date(items.RaceDate).toLocaleDateString()
      items.id = index
      items.minutes = new Date(items.RaceTime).getUTCMinutes()
      items.hour = new Date(items.RaceTime).getUTCHours()
    
    })
   setDetail(finaldata)
   setLoading(!loading)


//filtering currentday data
   const filterdate = finaldata.filter((items,index)=>{
    const currentday = new Date()
    const currenthour = new Date().getHours()
    console.log(currenthour)

    const currentdaystring = new Date(currentday).toLocaleDateString()
return(
// items.RaceDate===currentdaystring&&index<7&&items.minutes>new Date().getMinutes()
items.RaceDate===currentdaystring&&index<7&&items.hour==currenthour&&items.minutes>new Date().getMinutes()

)
  })
  console.log(filterdate)
  setTodayRace(filterdate)


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
    <div  id="sport-sec">        
            {/* <div className="container"> */}
            <Breadcrumb separator=">">
    <Breadcrumb.Item >
    <Link to="/" >Home</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
    <Link to="/thoroughbreds" >Sports</Link>

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
      {
               
               todayrace.map((items, index) => {

                const minutesnow = new Date().getMinutes()
                const minutesprev = new Date(items.RaceTime).getUTCMinutes()
                const inminutes = minutesprev-minutesnow
                console.log(inminutes)
    const trimlocation = items.RaceLocation.replace(/ +/g, "-").toLowerCase()

                

                return (
                  <>
                  <div className="tip-grid">
                      <div className="tips-colum1">
                        <img src="../Vector.png" alt="iage" />
                      </div>
                      <div className="tips-colum1">
                        <h3>{items.RaceLocation}</h3>
                        <div className="space">
                          <Link to={`/horseDetails/${items.id}/${trimlocation}`}>
                            <button className="btn">
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
            <div className='main_1 Throug-img'>
              <div className="upraces-img">
               {/* <img src="/races.png" /> */}
             </div>  
            </div>
          </div>
        </div>
      </div>


      
<div>
<div className='container-fluid raceup-sec'>
          <div className='container'>
            <h3 className="free-title">Today,{new Date().toDateString()}</h3>
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
      
      <Records loading = {loading} detail={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
<Footer/>
    </>

    )
  
}

