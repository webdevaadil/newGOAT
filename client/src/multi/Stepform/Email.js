import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import  Footer  from "../../components/Footer/Footer";
import "./Email.css";
import { Breadcrumb } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Loader } from "../../components/layout/Loader";
export const Email = ({ formData, setForm, navigation }) => {

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
const navigate=useNavigate()
  const dispatch=useDispatch()
  const signup=()=>{
    dispatch(register(formData))
  }
  
  function handle(e) {
   setForm(e)
   console.log(formData);
   setTimeout(signup, 5000);
   
  }
  console.log(formData);
  const alert = useAlert();
useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }
  if (isAuthenticated) {
    alert.success("Signup Successfull");
    navigate("/");
  }
}, [navigate, isAuthenticated,  error, alert, dispatch]);

return   (
  <>
{loading&&<Loader/>}
  <>
<section style={{ marginBottom:"10px"}}>
      <Header/>
      <Breadcrumb separator=">">
    <Breadcrumb.Item>
    <button className="btn"  onClick={()=>{navigation.previous()}}>back</button>
    </Breadcrumb.Item>
    
  </Breadcrumb>
      <div className="container">
        <h1 className="main_head">Packages</h1>
        <div className="flex_box">
          <div className="box_one">
            <h2>Pub Punters</h2>
            <h3>Free</h3>
            <button className="b1-btn_one"style={{width:"216px"}}>78% Returns</button>
            <ul className="list_item">
              <li>1234 Users</li>
              <li>234 Tips sent</li>
              <li>Recommended tips</li>
              <li>Recommended tips</li>
            </ul>
            <button
              className="btn_two"
              name="packages"
              value={"Free"}
              onClick={handle}
              >
              Select
            </button>
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
            <button
              className="btn_two"
              name="packages"
              value={"$15 / week"}
              
              onClick={handle}
            >
              Select
            </button>
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
            <button
              className="btn_two"
              name="packages"
              value={"$30 / week"}
              onClick={handle}
              >
              Select
            </button>
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
            <button
              className="btn_two"
              name="packages"
              value={"$45 / week"}
              onClick={handle}
            >
              Select
            </button>
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
            <button
              className="btn_two"
              name="packages"
              value={"$60 / week"}
              onClick={handle}
            >
              Select
            </button>
          </div>
        </div>
      </div>

    </section >
                    <Footer/>
                    </>
               
    
 </> );


}