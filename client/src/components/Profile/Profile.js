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
  const [image,setImage]  = useState("")
  const datat = user.dob
  // console.log(user.dob.;
// console.log(datat.toISOString().split('T')[0]);
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

console.log();

  return (<>
      <div style={{display:"flex"}}>
        {/* <ProfileNav/> */}
            <div className="box_two">
          <h2 className="pro_heading">Profile Photo</h2>

          <div className="pic_flex_box">
            <img  src={process.env.PUBLIC_URL + "img/1.png"}alt="rec" />
            <div className="image">
              <label htmlFor="file">Upload Photo
            <input accept ="image/*" type="file" className="big_btn" onChange = {(e)=>setImage(e.target.value)}/>
            </label>
            </div>
          </div>
          <h2 className="per_text">Personal Details</h2>
          <input onChange= {(e)=>{setName(e.target.value)}} value = {user.username}  className="name" type="text" placeholder="Full name" />
          <div className="input_flex_box">
            <input type="date" onChange = {(e)=>{setDate(e.target.value)}} value={formatDate(user.dob)}  className="dob"  placeholder="Date of Birth" />
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
