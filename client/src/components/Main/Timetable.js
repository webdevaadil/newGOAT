import React from 'react'
import './Sports.css'
import { useState,useEffect } from "react";
import axios from "axios"
import { Pagination } from './Pagination';
import { Link } from 'react-router-dom';
import { Loader } from '../layout/Loader';

export const Timetable = ({detail,loading}) => {



  return (
    <>
    
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

        <div className='container-fluid raceup-sec'>
          <div className='container'>
            <h3 className="free-title">Tomorrow, 05 Aug 2021</h3>


            {
               loading?<Loader/>:
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
   
   {
    
     detail.map((items,index)=>{
   return (
     <tr  key = {index}>
     <td>
       <img src="../left-Vector.png" alt="horse image" />
     </td>
     <td>{items.RaceTime}</td>
     <td>{items.RaceLocation}</td>
     <td>
       <Link to ={`/greydetails/${index}`}>
   
       <button className="btn btn-1">Race       {items.RaceNumber}</button>
       </Link>
     </td>
     <td>6.7</td>
   </tr>
   )
     })
   }
   
   
                </tbody>
                 </table>
             
               </div>
            }
           
          </div>
        </div>
    
    </>
  )
}
