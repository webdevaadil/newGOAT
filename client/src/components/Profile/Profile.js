import axios from 'axios'
import React,{useState} from 'react'
import { ProfileNav } from './ProfileNav'
import { useSelector, useDispatch } from "react-redux";


export const Profile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
console.log();

  const [data, setData] = useState([])
// console.log(data);
  const handle = (e) => {
    // setdata({ ...data, [e.target.name]: e.target.value });
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
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

        <div class="box_two">
                <h2 class="pro_heading">Profile Photo</h2>

                <div class="pic_flex_box">
                    <img class="pro_pic" src="img/1.png" alt='loading'/>
                    <button class="big_btn">Upload Photo</button>
                </div>
                <h2 class="per_text">Personal Details</h2>
                <input class="name" type="text" placeholder="Full name"/>
                <div class="input_flex_box">
                    <input class="dob" type="date" placeholder="Date of Birth"/>
                    <select class="gender" type="text">
                        <option value="volvo">Male</option>
                    </select>

                </div>
                <div class="button_flex_box">
                    <button class="dis_btn">Discard</button>
                    <button class="sav_btn">Save</button>
                </div>
            </div>
        </div>
   
  </>
  )
}



