import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Email.css";
import { Breadcrumb } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Loader } from "../../components/layout/Loader";
export const Email = ({ formData, setForm, navigation }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signup = () => {
    dispatch(register(formData))
    handleClose()
  }
  // console.log(formData);

  function handle(e) {
    setForm(e)
    handleShow()
  }
  const alert = useAlert();
  useEffect(() => {
    window.scrollTo(0, 150)
  
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      alert.success("Signup Successfull");
      navigate("/");
    }
  }, [navigate, isAuthenticated, error, alert, dispatch]);

  return (
    <>

      {loading!== false&&(<Loader />)}
       <>
       <div className  = {loading?"aad":""}>
       <section  style={{ marginBottom: "10px" }}>
         <Header />

         <div className="container">

<div className="container section">
         <div style={{paddingLeft:"110px"}} id="sport-sec">
         <Breadcrumb separator=">">
           <Breadcrumb.Item>
             <span className="btn" style={{ padding: "7px" }} onClick={() => { navigation.previous() }}>Signup</span>
           </Breadcrumb.Item>
           <Breadcrumb.Item>
             <span className="btn" style={{ padding: "7px"}}>Packages</span>
           </Breadcrumb.Item>
         </Breadcrumb>
         </div>

           <h1 style={{ textAlign: "center",fontWeight:800  }} className="main_head">Packages</h1>
           <div className="flex_box">
             <div className="box_one">
               <h2>Pub Punters</h2>  
               <h3>Free</h3>
               <button className="b1-btn_one" style={{ width: "216px" }}>78% Returns</button>
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
               <button className="b2-btn_one" style={{ width: "216px" }}>98% Returns</button>
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
               <button className="b3-btn_one" style={{ width: "216px" }}>120% Returns</button>
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
               <button className="b4-btn_one" style={{ width: "216px" }}>165% Returns</button>
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
               <button className="b5-btn_one" style={{ width: "216px" }}>265% Returns</button>
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

       
         </div>
         <Modal style={{ height: "800px" }} show={show} onHide={handleClose}>

         

             <Modal.Body style={{ display: "flex", height: "200  px", alignItems: "center", justifyContent: "center" ,flexDirection:"column"}} closeButton>
<h1 style={{fontSize:"30px"}}>Now you can register</h1>
               {formData.packages !== "" ?
                 (<button className="btn_two btn" style={{ height: "50px", backgroundColor: " #10867F", color: "black", float: "right", margin: 0 }} onClick={signup}>Register</button>) : ("")

               }
             </Modal.Body>
           

         </Modal>
       </section >
       <Footer />
       </div>
     </>
  

     


    </>);


}