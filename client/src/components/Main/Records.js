import React from 'react'
import { Link } from 'react-router-dom'

export const Records = ({detail}) => {
  
   
 
  return (
    <>
     <div>
        <div className="container-fluid upcomming-sec">
          <div className="container">
            <h3>Upcoming Races</h3>
            <div className="upcomming-table">
              <table>
                <tr>
                  <th className="first-border">Category</th>
                  <th>Time</th>
                  <th>Track Name</th>
                  <th>Race No.</th>
                  <th className="first-border2">Win Odds</th>
                </tr>
{
  detail.map((items,index)=>{

    return(
      <tr  key = {index}>
      <td>
        <img src="../Vector.png" alt="horse image" />
      </td>
      <td>{items.RaceDate}</td>
      <td>{items.RaceLocation}</td>
      <td>
      <Link to = "/horsedetails">

<button className="btn btn-1">Race  {items.RaceNumber}</button>
</Link>
      </td>
      <td>6.7</td>
    </tr>
    )
  })}

          </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
