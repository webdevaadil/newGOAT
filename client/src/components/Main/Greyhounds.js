import { Link } from "react-router-dom";
import { Timetable } from "./Timetable";


export const Greyhounds = ()=>{
  return(
      <>      
      <headbnner id="sport-sec">        
            <div className="container">
            <nav aria-label="breadcrumb" className="section-banner">
                <ol class="breadcrumb">
                    <Link to="/" class="breadcrumb-item"><a href="#">Home</a></Link>
                    <Link to="/Sports" class="breadcrumb-item"><a href="#">Sports</a></Link>
                    <Link to="/" class="breadcrumb-item 
                    " aria-current="page">Greyhounds</Link>
                </ol>
             </nav>
            </div>
        </headbnner>
        <tipsmain>    
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
                    <button className='btn freebt-2'>Race 1</button>
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
                    <button className='btn freebt-2'>Race 2</button>
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
                    <button className='btn freebt-2'>Race 2</button>
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
                    <button className='btn freebt-2'>Race 2</button>
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
                    <button className='btn freebt-2'>Race 2</button>
                    <p>In 6 minutes</p>
                  </div>
                 </div>
              </div>             
            </div>
            </div>
            <div className='main_1'>
              <div className="upraces-img">
               <img src="../images/grayhound-bh.png" />
             </div>  
            </div>
          </div>
        </div>
      </tipsmain>
   <Timetable/> 
  
    </>
  )
}