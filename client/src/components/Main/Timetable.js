import React from 'react'
import './Sports.css'
import { useState,useEffect } from "react";
import axios from "axios"
import { Pagination } from './Pagination';
import { Link } from 'react-router-dom';
import { Loader } from '../layout/Loader';

export const Timetable = ({detail,loading,dogimg}) => {



  //getting today date
   
  const currentday = new Date()
  const currentdaystring = new Date(currentday).toLocaleDateString()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  // console.log(currentdaystring)

   const filtereddate = detail.filter((items,index)=>{
    return(
      items.RaceDate === currentdaystring
      )
      
    })

// console.log(detail)
    //Getting Tommoroww date
    const nextday  = new Date(currentday)
    nextday.setDate(nextday.getDate()+1)
   
    const newdate = nextday.toLocaleDateString()
    // console.log(newdate)


    const tommorow = detail.filter((items,index)=>{
      return(
    items.RaceDate === newdate
      )
    })
    

    // console.log(tommorow)

 
  return (
    <>
    <div className='container-fluid raceup-sec'>
          <div className='container'>
            <h3 className="free-title">Today,{currentday.toLocaleDateString('en-US', options)}</h3>
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
  filtereddate.map((items,index)=>{
    let racetime = new Date(items.RaceTime).toLocaleTimeString()
    return(
     
               <tr key={items.id}>
                  <td>{items.RaceLocation}</td>
                  <td>{racetime}</td>
                  <td>{items.RaceNumber}</td>
                  <td> 5</td>
                  <td>6.7</td>  
                </tr>

    )
  })
}
              </tbody>         
              </table>
            </div>
          </div>
        </div>

        <div className='container-fluid raceup-sec'>
          <div className='container'>
            <h3 className="free-title">Tomorrow, {nextday.toLocaleDateString('en-US', options)}</h3>

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
     tommorow.map((items,index)=>{
    let racetime = new Date(items.RaceTime).toLocaleTimeString()
    const trimlocation = items.RaceLocation.replace(/ +/g, "")


   return (
     <tr  key = {index}>
     <td>
       <img src={dogimg} alt="horse image" />
     </td>
     <td>{racetime}</td>
     <td>{items.RaceLocation}</td>
     <td>
       <Link to ={`/greydetails/${items.id}/${trimlocation}`}>
   
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
