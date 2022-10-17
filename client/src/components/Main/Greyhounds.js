import { Link, useNavigate } from "react-router-dom";
import { Timetable } from "./Timetable";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb } from "antd";
import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";

import img1 from "../../Images/left-Vector.png";
import HomeFooter from "../Footer/HomeFooter";

export const Greyhounds = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todayrace, setTodayRace] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  

  const getdata = async () => {
    const res = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=mRCJoZmZwDhI9snrKQytAyaYBFA86KZVDFLPkYBXbWHawByMQFgspe7s0zeJeD95vZVdmaoMk9evhzGCuq80mcjgkSfQdbTBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF9OXc95fD23eDvAhF7wtmVRghiF34032X6xCyWzrqMkLu9JIXnQGOCkJaLaMp569JzQoN6xAOTwYcScU6dDSajx9N_XZM_k49z9Jw9Md8uu&lib=MBii240CyOZU5TRkVZr_iMkwZJcFcrlZl"
    );
    let finaldata = await res.data.data;
    finaldata.map((items, index) => {
      items.RaceDate = new Date(items.RaceDate).toLocaleDateString();
      items.id = index;
      items.minutes = new Date(items.RaceTime).getUTCMinutes();
      items.hour = new Date(items.RaceTime).getUTCHours();
    });
    // console.log(finaldata);

    const filterdate = finaldata.filter((items, index) => {
      const currentday = new Date();
      const currentdaystring = new Date(currentday).toLocaleDateString();
      return (
        items.RaceDate === currentdaystring &&
        items.minutes > new Date().getMinutes() &&
        items.hour === new Date().getHours()
      );
    });
    // console.log(filterdate);
    setTodayRace(filterdate);

    setDetail(finaldata);

    setLoading(!loading);
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (user) {
      if (user.paymentstatus === "false") {
        navigate("/password");
      }
      if (user.PaymentexpireDate >= Date()) {
        navigate("/subscriptionexpire");
      }
    }
    getdata();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = detail.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(detail.length / recordsPerPage);
  // console.log(currentRecords);

  return (
    <>
      <Header />
     
      <div>
        <div className="container-fluid" id="freetip-sec">
          <div className="container section">
          <div id="sport-sec">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="The-Goat-Tips">Home</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item style = {{marginLeft:"4px"}}>
            {/* <Link style={{color:"#10867F"}} to = "/greyhounds"> */}
            Greyhounds
            {/* </Link> */}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
            <h3 className="free-title">Races Up Next</h3>
          </div>
          <div className="container main-freetips">
            <div className="main_1">
              <div className="main-grid 1">
                {todayrace.map((items, index) => {
                  const minutesnow = new Date().getMinutes();
                  const minutesprev = new Date(items.RaceTime).getUTCMinutes();
                  const inminutes = minutesprev - minutesnow;
                  // console.log(inminutes);
                  const trimlocation = items.RaceLocation.replace(
                    / +/g,
                    "-"
                  ).toLowerCase();

                  return (
                    <>
                      <div key={items.id} className="tip-grid">
                        <div className="tips-colum1">
                          <img src={img1} alt="iage" />
                        </div>
                        <div className="tips-colum1">
                          <h3>{items.RaceLocation}</h3>
                          <div className="space">
                            <Link
                              to={`/greydetails/${items.id}/${trimlocation}`}
                            >
                              <button className="btn freebt-2">
                                Race {items.RaceNumber}
                              </button>
                            </Link>
                            <p>in {inminutes} Minute</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="main_1">
              <div className="upraces-img">
                <img src="/grayhound-bh.png" alt="Greyhound picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Timetable dogimg={img1} loading={loading} detail={detail} />

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <HomeFooter/>
    </>
  );
};
