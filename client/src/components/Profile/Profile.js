import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { user, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  // const [name, setName] = useState("");
  // const [date, setDate] = useState(``);
  // const [gender, setGender] = useState("");
  // const [image, setImage] = useState("");

  const [data,setData] = useState({
    name:"",
    date:"",
    gender:"",
  })



  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

const handleChange = ()=>{
  

}
  return (
    <>
      <div style={{ display: "flex" }}>
       {isAuthenticated===true?(
         <div className="box_two">
         <h2 className="pro_heading">Profile Photo</h2>

         <div className="pic_flex_box">
           <img src={process.env.PUBLIC_URL + "img/1.png"} alt="rec" />
           <div className="image">
             <label htmlFor="file">Upload Photo</label>
             <input
               style={{ backgroundColor: "white" }}
               type="file"
               className="big_btn"
               onChange={handleChange}
             />
           </div>
         </div>
         <h2 className="per_text">Personal Details</h2>
         <input
           onChange={handleChange}
           value={data.name}
           className="name"
           type="text"
           placeholder="Full name"
           name ='name'
         />
         <div className="input_flex_box">
           <input
             onChange={handleChange}
             value={formatDate(data.date)}
             className="dob"
             placeholder="Date of Birth"
             name = "date"
           />
           <input
             onChange={handleChange}
             value={data.gender}
             className="gender"
             type="text"
             placeholder="Gender(Optional)"
             name = "gender"
           />
         </div>
         <div className="button_flex_box">
           <button className="dis_btn">Discard</button>
           <button className="sav_btn">Save</button>
         </div>
       </div>
       ):("")}
      </div>
    </>
  );
};
