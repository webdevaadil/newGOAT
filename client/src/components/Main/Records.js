import React from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../layout/Loader'

export const Records = ({detail,loading}) => {
   
  const  formatDate = (date)=> {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var now = new Date(date);
    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    var hour = now.getHours();
    var min = now.getMinutes();
   var year = now.getFullYear();
    var period = "am"
    if (hour > 11) {
        period = "pm"
        if (hour > 12) {
            hour -= 12
        }
    }
    if (min < 10) {
        min = "0" + min
    }
    console.log(period);
    return `${date}    ${month}    ${year}`
    // console.log((month + "/" + date));
  }

  return (
    <>
    {
  loading?<Loader/>:(
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
    
    const date = new Date(items.RaceDate).toDateString()
 const trimlocation = items.RaceLocation.replace(/ +/g, "-").toLowerCase()

    return(
      <tr  key = {index}>
      <td>
        <img src="../Vector.png" alt="horse image" />
      </td>
      <td>{date}</td>
      <td>{items.RaceLocation}</td>
      <td>
      <Link to = {`/horsedetails/${items.id}/${trimlocation}`}>

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
     
    </>
  )
}
