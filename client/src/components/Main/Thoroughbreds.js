import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Sports.css"
import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";
import { Breadcrumb } from 'antd';



export const Thoroughbreds=()=>{


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
            {/* </div> */}
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
      <Timetable/>
<Footer/>
    </>
    )
  
}

