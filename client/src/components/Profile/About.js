import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Loader } from "../layout/Loader";
import "./about.css";
export const About = () => {
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );
  return (
    <>
    {loading? <Loader/>:
    <>
      {isAuthenticated === true ? (
        <div className="profile_box_two ">
          <div className="about_box_two">
            <h2 className="pro_heading">Terms of Service</h2>
            <p className="text_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              tincidunt pellentesque egestas eu rutrum sed. Consectetur urna
              tempus rhoncus volutpat aliquam vel ut nisi. Quisque cursus
              malesuada morbi etiam condimentum quis. Ac eleifend molestie in
              sapien. Condimentum leo amet, dolor ultrices quam in. Et, nunc
              orci, in mattis quam. Lectus sed consectetur nisl dolor pharetra
              sit morbi ut elementum. At eu, amet praesent amet sed velit
              fringilla ipsum sit. Pharetra aliquet hendrerit nulla eu. Pulvinar
              dolor blandit nibh semper commodo a at. Nisl id vel nec sapien.
              Ipsum vel pulvinar non etiam nec. At nibh sit quisque in
            </p>
          </div>

          <div className="about_box_two">
            <h2 className="pro_heading">Privacy Policy</h2>
            <p className="text_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              tincidunt pellentesque egestas eu rutrum sed. Consectetur urna
              tempus rhoncus volutpat aliquam vel ut nisi. Quisque cursus
              malesuada morbi etiam condimentum quis. Ac eleifend molestie in
              sapien. Condimentum leo amet, dolor ultrices quam in. Et, nunc
              orci, in mattis quam. Lectus sed consectetur nisl dolor pharetra
              sit morbi ut elementum. At eu, amet praesent amet sed velit
              fringilla ipsum sit. Pharetra aliquet hendrerit nulla eu. Pulvinar
              dolor blandit nibh semper commodo a at. Nisl id vel nec sapien.
            
            </p>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
    }
    </>
  );
};
