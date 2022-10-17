import React, { useEffect,useState} from "react";
import { Link,useParams} from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import axios from "axios";
import { Breadcrumb } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import { Loader } from "../layout/Loader";
import HomeFooter from "../Footer/HomeFooter";


export const HorseDetails = ()=>{
    const { id,location} = useParams();
//    console.log(location);
    const [detail,setDetail] = useState([])
    const [loading,setLoading] = useState(true)
    const [weatherdata,setWeatherData]  = useState("")
    const [temprature,setTemprature] = useState()
    const getdata = async()=>{
        
        const res = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=z8U-J-WGfUKgT7aI036ce0-LqgyvluBVYO6sl3MBidqsoxeP8zVCsBqh3KALwEXqsmH3b3AH8f2vhzGCuq80mZw5OuI2BYhEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM5Ekl7EwoTMsxbGD7Mk6JPN3Ls7Oyxjmrsr3ZQwRD52M_vMAqczDkXfnrBBGFFHff8VMKaSWAE-WxUrUSiQwyHxctBCURm4-9z9Jw9Md8uu&lib=MBii240CyOZU5TRkVZr_iMkwZJcFcrlZl")
        let finaldata = await res.data.data[id]
    // console.log(finaldata)
       setDetail([finaldata])
       
       setLoading(!loading)
    
      }
const [useloc, setuseloc] = useState(location)
    
      const getWeather = async()=>{


       const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.split('-').join(' ')},{Au}&units=metric&appid=b73312e7c6fc88cb40630784c12943b0`)
     
     const temp = res.data.main.temp
     setTemprature(temp)
    //  console.log(temprature)
     res.data.weather.map((items,index)=>{
         setWeatherData(items.description)
        //  console.log(weatherdata)

        })

            
          }
    

          useEffect(()=>{
            getdata()
            if(location=== "Central-Park"){
                setuseloc(`Central Park`) 
           }
        //    console.log(location);
            getWeather()
          },[])
  
    //   console.log(detail)
    //   console.log(useloc)

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
        // console.log(period);
        return `${date}    ${month}    ${year}`
        // console.log((month + "/" + date));
      }

      function getTime(date){
        var now = new Date(date);

        var hour = now.getHours();
        var min = now.getMinutes();


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

        return  `${hour}:${min}   ${period}`

      }



  return(
      <>  
     {
        loading?<Loader/>:(
            <>
              <Header/>    
    
        <div>
        <div style = {{paddingLeft:"15px"}} id="sport-sec">        
        </div>  
        <div className="container-fluid details-sec">
        <div className="container section">
      <Breadcrumb style= {{marginLeft:"15px"}} separator=">">

    <Breadcrumb.Item >
    <Link to="/Thoroughbreds" >Thoroughbreds</Link>

    </Breadcrumb.Item>
    <Breadcrumb.Item >
 <Link style={{color:"#10867F"}} to = "/thoroughbreds">
 Details
 </Link>
    </Breadcrumb.Item>
  </Breadcrumb>
           <div className="container mt-3">
           <div  className="row">
                <div className="col-lg-12 col-width">
                  <div className="detisl-bg">
                    <img src="/details-bg.png" />
                  </div>

{
   detail.map((item,index)=>{
    return(

        <div className="row">
        <div className="det-des mt-4">
            <h3>  { formatDate(item.RaceDate) }</h3>
            <div className="row det-cont mt-2">
                <div className="col-md-2 ">
                     <button className='btn det-btn'>Race     {item.RaceNumber}</button>
                </div>
                <div className="col-md-3 ">
                    <div className="detail-date">
                        <p>{item.RaceLocation}</p>
                    </div>
                </div>
                <div className="col-md-2 ">
                  <div className="detail-time">
                        <p>{getTime(item.RaceDate)}</p>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="detail-mt">
                        <p><img src="/carbon_partly-cloudy.png" />       {" "}        {temprature}°C {weatherdata}</p>
                    </div>
                </div>
                <div className="col-md-2 ">
                    
                </div>
            </div>
        </div>
      </div>
    )
   })
}
              <div className="row">
                    <div className='upcomming-table'>
                        <table>
                            <tr>
                            <th className='first-border'>No.</th>
                            <th>Horse Name</th>
                            <th>Jockey</th>
                            <th>Official Odds</th>
                            <th className='first-border2'> <img src="/Group5.png" alt = "goatimage" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> Casper</td>
                                <td>Egbert Clarkson</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                <td>2</td>
                                <td> Abram</td>
                                <td>Marilyn Saris</td>
                                <td> 2</td>
                                <td>3.6</td>  
                            </tr>
                            <tr>
                            <td>3</td>
                                <td> Skylar</td>
                                <td>Jordyn Press</td>
                                <td> 5</td>
                                <td>5</td>    
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Charlie</td>
                                <td>Giana Press</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                <td>5</td>
                                <td> Gustavo</td>
                                <td>Miracle Siphron</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                <td>6</td>
                                <td> Hanna</td>
                                <td>Egbert Clarkson</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>
                            <tr>
                                 <td>7</td>
                                <td>Roger</td>
                                <td>Alfredo Geidt</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>   
                            <tr>
                                 <td>8</td>
                                <td>Cooper</td>
                                <td>Justin Lubin</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr> 
                            <tr>
                                 <td>9</td>
                                <td>Allison</td>
                                <td>Allison</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr> 
                            <tr>
                                 <td>10</td>
                                <td>Kianna</td>
                                <td>Madelyn Dokidis</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>    
                            <tr>
                                 <td>11</td>
                                <td>Kianna</td>
                                <td>Madelyn Dokidis</td>
                                <td> 5</td>
                                <td>5</td>  
                            </tr>          
                        </table>
                        </div>
                    </div>
                </div> 

            </div>
            </div>

        </div>
            </div>
        </div>        
<HomeFooter/>
            </>
        )
     }
    
    </>
  )
}