import React, { useEffect } from 'react'
import "./Package.css"
import Select from 'react-select'
import img1 from "../../Images/level.png"
import img2 from "../../Images/name1.png"
import img3 from "../../Images/name2.png"
import img4 from "../../Images/name3.png"
import img5 from "../../Images/name4.png"
import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import Footer from '../Footer/Footer'

export const Package = () => {

  const options = [
    { value: '$60 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}} src={img1} />$60 / week</div> },
    { value: '$45 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img2} />$45/ week</div> },
    { value: '$30 / week', label:<div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img3} />$30/ week</div>  },
    { value: '$15 / week', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img4} />$15/ week</div>  },
    { value: 'Free', label: <div style = {{fontWeight:600,fontSize:"20px",color:"#282828"}}><img style={{height:"60px",width:"205px",marginRight:"30px"}}  src={img5} />Free</div> },
  ];

  const customStyles ={
    height:45
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div style={{display:"flex" ,flexDirection:"column" ,justifyContent:"space-between"}}>

<Header/>
<section style={{    display: "flex",
    flexDirection: "column",
    height: "100%",  margin:"100px 0"}}>
        <div className="container">
            <h1 className="main_head">Packages</h1>
            <div className="flex_box">
                <div className="box_one">
                    <h2>Pub Punters</h2>
                    <h3>Free</h3>
                    <button className="b1-btn_one" style={{width:"216px"}}>78% Returns</button>
                    <ul className="list_item">
                        <li>1234 Users</li>
                        <li>234 Tips sent</li>
                        <li>Recommended tips</li>
                        <li>Recommended tips</li>
                    </ul>
                     <Link to="/dashboard/payment">
                    <button className="btn_two" >Select</button>
                    </Link>
                </div>


                <div className="box_one">
                    <h2>Bronze</h2>
                    <h3>$15 / week</h3>
                    <button className="b2-btn_one"style={{width:"216px"}}>98% Returns</button>
                    <ul className="list_item">
                        <li>1234 Users</li>
                        <li>234 Tips sent</li>
                        <li>Recommended tips</li>
                        <li>Recommended tips</li>
                    </ul>
                     <Link to="/dashboard/payment">
                    <button className="btn_two" >Select</button>
                    </Link>
                </div>
                <div className="box_one">
                    <h2>Silver</h2>
                    <h3>$30 / week</h3>
                    <button className="b3-btn_one"style={{width:"216px"}}>120% Returns</button>
                    <ul className="list_item">
                        <li>1234 Users</li>
                        <li>234 Tips sent</li>
                        <li>Recommended tips</li>
                        <li>Recommended tips</li>
                    </ul>
                     <Link to="/dashboard/payment">
                    <button className="btn_two" >Select</button>
                    </Link>
                </div>
                <div className="box_one">
                    <h2>Gold</h2>
                    <h3>$45 / week</h3>
                    <button className="b4-btn_one"style={{width:"216px"}}>165% Returns</button>
                    <ul className="list_item">
                        <li>1234 Users</li>
                        <li>234 Tips sent</li>
                        <li>Recommended tips</li>
                        <li>Recommended tips</li>
                    </ul>
                     <Link to="/dashboard/payment">
                    <button className="btn_two" >Select</button>
                    </Link>
                </div>
                <div className="box_one">
                    <h2>Platinum</h2>
                    <h3>$60 / week</h3>
                    <button className="b5-btn_one"style={{width:"216px"}}>265% Returns</button>
                    <ul className="list_item">
                        <li>1234 Users</li>
                        <li>234 Tips sent</li>
                        <li>Recommended tips</li>
                        <li>Recommended tips</li>
                    </ul>
                    <Link to="/dashboard/payment">
                     
                    <button className="btn_two" >Select</button>
                    </Link>
                </div>
            </div>
        </div>


 
    </section>
    <Footer/>
    </div>


    </>
  )
}
