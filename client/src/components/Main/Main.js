import React, { useDebugValue, useEffect, useState } from "react";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
import { Metadata } from "../layout/Metadata";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import store from "../../store";
import { useSelector } from "react-redux";
import { loaduser } from "../../actions/userAction";
import axios from 'axios'
import { Records } from "./Records";
import { Pagination } from "./Pagination";

export const Main = () => {

  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const getdata =async()=>{

    const res = await axios.get("https://api.sheety.co/0c0bc2828e2abc80b15460bd2b8c43e9/horsetips/sheet2")
    let finaldata = await res.data.sheet2
   setDetail(finaldata)
   console.log(detail)
  }


useEffect(()=>{

  getdata()
},[])


const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = detail.slice(indexOfFirstRecord, indexOfLastRecord);
const nPages = Math.ceil(detail.length / recordsPerPage)
console.log(currentRecords)

  return (
    <>
      <Metadata title="the Goat tips" />
      <Header />
      {/* main image */}

      <div className="slide">
        <section className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="main-sec">
                <div className="main-content">
                  <h2>The Goat Tips</h2>
                  <p>
                    The Goat Tips - Betting made easy! Your guide for sports
                    betting, The Goat’s Tips caters to your needs with different
                    packages, provides tips and guidance for betting on
                    Thoroughbreds, Greyhounds and much more with real-time data
                    on upcoming races and a great ROI. Sign up now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* free tips section */}

      <div>
        <div className="container-fluid" id="freetip-sec">
          <div className="container section">
            <h3>Today’s Free Tips</h3>
          </div>
          <div className="container main-freetips">
            <div className="main_1">
              <div className="main-grid 1">
                <div className="tip-grid">
                  <div className="tips-colum1">
                    <img src="../Vector.png" alt="iage" />
                  </div>
                  <div className="tips-colum1">
                    <h3>Murray Bridge, NSW</h3>
                    <div className="space">
                      <Link to = "/horsedetails">
                      <button className="btn">Race 2</button>
                      </Link>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="tip-grid">
                  <div className="tips-colum1">
                    <img src="../left-Vector.png" alt="iage" />
                  </div>
                  <div className="tips-colum1">
                    <h3>Murray Bridge, NSW</h3>
                    <div className="space">
                    <Link to = "/horsedetails">
                      <button className="btn">Race 2</button>
                      </Link>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="tip-grid">
                  <div className="tips-colum1">
                    <img src="../left-Vector.png" alt="iage" />
                  </div>
                  <div className="tips-colum1">
                    <h3>Murray Bridge, NSW</h3>
                    <div className="space">
                    <Link to = "/horsedetails">
                      <button className="btn">Race 2</button>
                      </Link>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="tip-grid">
                  <div className="tips-colum1">
                    <img src="../Vector.png" alt="iage" />
                  </div>
                  <div className="tips-colum1">
                    <h3>Murray Bridge, NSW</h3>
                    <div className="space">
                    <Link to = "/horsedetails">
                      <button className="btn">Race 2</button>
                      </Link>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="tip-grid">
                  <div className="tips-colum1">
                    <img src="../left-Vector.png" alt="iage" />
                  </div>
                  <div className="tips-colum1">
                    <h3>Murray Bridge, NSW</h3>
                    <div className="space">
                    <Link to = "/horsedetails">
                      <button className="btn">Race 2</button>
                      </Link>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="tip-grid">
                  <div className="tips-colum1">
                    <img src="../Vector.png" alt="iage" />
                  </div>
                  <div className="tips-colum1">
                    <h3>Murray Bridge, NSW</h3>
                    <div className="space">
                    <Link to = "/horsedetails">
                      <button className="btn">Race 2</button>
                      </Link>
                      <p>9:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_1 main-img">
              <div className="main_cont">
                <h3>Sign up to The Goat Tips Today!</h3>
                <p>And get the hottest tips that can earn you up to </p>
                <h4>
                  <span>678% in returns</span> on your initial investment.
                </h4>
                Link
                <button className="btn freetips-btn">SIGN ME UP!</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Records detail={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

     
      <Footer />
    </>
  )}