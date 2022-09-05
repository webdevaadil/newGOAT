import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./impo.css";
export const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(150, 0)
  }, [])
  return (<>
      <Header/>

    <div
      style={{
        margin: "0 auto",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding:"100px"
        
      }}
    >
      {" "}
      <div className="box-about">
        <h2 className="pro_heading">Terms of Service</h2>
        <p className="text_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          tincidunt pellentesque egestas eu rutrum sed. Consectetur urna tempus
          rhoncus volutpat aliquam vel ut nisi. Quisque cursus malesuada morbi
          etiam condimentum quis. Ac eleifend molestie in sapien. Condimentum
          leo amet, dolor ultrices quam in. Et, nunc orci, in mattis quam.
          Lectus sed consectetur nisl dolor pharetra sit morbi ut elementum. At
          eu, amet praesent amet sed velit fringilla ipsum sit. Pharetra aliquet
          hendrerit nulla eu. Pulvinar dolor blandit nibh semper commodo a at.
          Nisl id vel nec sapien. Ipsum vel pulvinar non etiam nec. At nibh sit
          quisque in scelerisque consectetur purus. Facilisis adipiscing
          vulputate velit vitae, mus vitae. Sit a tortor sed et. Ultricies
          integer aliquam et amet amet pharetra ornare lobortis sed. Nisi quis
          sed tellus nisi et mi dictumst tristique sit. Leo, pharetra nisl orci,
          nisl. Arcu, nisl et nulla et viverra sit sed erat. Lorem imperdiet
          tincidunt nisi nulla amet, praesent sodales luctus ac. Ultrices
          suscipit accumsan sit pretium fermentum lectus. Ullamcorper fringilla
          urna ultrices sem scelerisque lectus leo. Gravida diam sagittis nisl
          in vel sit bibendum. Tincidunt dictumst dui luctus dapibus convallis
          elementum massa cursus. Nunc netus commodo orci enim commodo. Aliquet
          sit dolor cum magna morbi auctor vel hac nisi.
        </p>
      </div>
      <div className="box-about">
        <h2 className="pro_heading">Privacy Policy</h2>
        <p className="text_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          tincidunt pellentesque egestas eu rutrum sed. Consectetur urna tempus
          rhoncus volutpat aliquam vel ut nisi. Quisque cursus malesuada morbi
          etiam condimentum quis. Ac eleifend molestie in sapien. Condimentum
          leo amet, dolor ultrices quam in. Et, nunc orci, in mattis quam.
          Lectus sed consectetur nisl dolor pharetra sit morbi ut elementum. At
          eu, amet praesent amet sed velit fringilla ipsum sit. Pharetra aliquet
          hendrerit nulla eu. Pulvinar dolor blandit nibh semper commodo a at.
          Nisl id vel nec sapien. Ipsum vel pulvinar non etiam nec. At nibh sit
          quisque in scelerisque consectetur purus. Cursus nec gravida sem nisl.
          Lorem vel lorem nisl mauris. Arcu duis libero massa volutpat feugiat
          augue sapien, dignissim vivamus. Faucibus tristique sed posuere felis
          tellus scelerisque iaculis pellentesque. Amet dignissim at duis id et
          viverra elementum. Urna sed enim quis leo amet. Quis sit leo congue
          odio. Risus, ut in tempor in consequat ut. Consequat non ac eu porta
          volutpat tempor. Faucibus integer hendrerit etiam egestas at. Purus
          nisl in varius volutpat lorem tortor bibendum non sit. Pellentesque
          tempor tellus nunc, ultricies gravida pulvinar. Eget dictum suscipit
          leo, amet. Quis venenatis vel id tristique vitae rhoncus ultrices.
        </p>
      </div>
    </div>
      <Footer/>
        </>
  );
};
