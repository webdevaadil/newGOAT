import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Sports.css"
import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";


export const Sports=()=>
{
    return (<>
    
    <Header/>
    <div id="sport-sec">        
            <div className="container">
            <nav aria-label="breadcrumb" className="section-banner">
                <ol className="breadcrumb">
                    <Link to="/" className="breadcrumb-item">Home</Link>
                    <Link to="/Sports" className="breadcrumb-item">Sports</Link>
                    <Link to="/" className="breadcrumb-item active" aria-current="page">Thoroughbreds</Link>
                </ol>
             </nav>
            </div>
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
                    <button className='btn'>Race 1</button>
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
                    <button className='btn'>Race 2</button>
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
                    <button className='btn'>Race 2</button>
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
                    <button className='btn'>Race 2</button>
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
                    <button className='btn'>Race 1</button>
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
                    <button className='btn'>Race 2</button>
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

