import axios from 'axios'
import React,{useState} from 'react'
import { ProfileNav } from './ProfileNav'
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  const { user, isAuthenticated, loading,error } = useSelector((state) => state.user);

  const data= axios.post(`/api/auth/dashboard`)

  const [name,setName] = useState("")
  const [date,setDate]  = useState(``)
  const [gender,setGender]  = useState("")


  return (<>
      <div style={{display:"flex"}}>
        {/* <ProfileNav/> */}
            <div className="box_two">
          <h2 className="pro_heading">Profile Photo</h2>

          <div className="pic_flex_box">
            <img  src={process.env.PUBLIC_URL + "img/1.png"}alt="rec" />
            <input className="big_btn" value ="Upload Photo"/>
          </div>
          <h2 className="per_text">Personal Details</h2>
          <input onChange= {(e)=>{setName(e.target.value)}} value = {user.username}  className="name" type="text" placeholder="Full name" />
          <div className="input_flex_box">
            <input onChange = {(e)=>{setDate(e.target.value)}} value={user.dob}  className="dob"  placeholder="Date of Birth" />
            <input  onChange = {(e)=>{setGender(e.target.value)}} value = {user.gender} className="gender" type="text" placeholder="Gender(Optinal)" />
          </div>
          <div className="button_flex_box">
            <button className="dis_btn">Discard</button>
            <button className="sav_btn">Save</button>
          </div>
        </div>
    </div>
  </>
  )
}
