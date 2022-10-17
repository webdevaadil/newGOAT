import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../layout/Loader";

export const Records = ({ detail, loading, horseimg }) => {
  // console.log(detail);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <button onClick={handlechange}>fillter</button> */}
          <div>
            <div className="container-fluid upcomming-sec">
              <div className="container" style={{marginBottom:"10px"}}>
                <h3 style={{fontSize:"3rem"}}>Upcoming Races</h3>
                <div className="upcomming-table">
                  <table>
                    <tr>
                      <th className="first-border">Category</th>
                      <th>Time</th>
                      <th>Track Name</th>
                      <th>Race No.</th>
                      <th className="first-border2">Win Odds</th>
                    </tr>
                      
                    {detail.map((items, index) => {
                      const date = new Date(items.RaceDate).toDateString();
                      const trimlocation = items.RaceLocation.replace(
                        / +/g,
                        "-"
                      ).toLowerCase();
                      // console.log(items);

                      return (
                        <tr key={index}>
                          <td>
                            <img src={horseimg} alt="horse-image" />
                          </td>
                          <td>{date}</td>
                          <td>{items.RaceLocation}</td>
                          <td>
                            <Link
                              to={`/horsedetails/${items.id}/${trimlocation}`}
                            >
                              <button className="btn btn-1">
                                Race {items.RaceNumber}
                              </button>
                            </Link>
                          </td>
                          <td>6.7</td>
                        </tr>
                      );
                    })}
                  </table>
                      {detail.length<=0&&( <div className="content">
                            <div className="wrapper-1" style={{marginBottom:"20px"}}>
                              <div className="wrapper-2">
                                <p>
                                  "No races for the day stay tuned for daily races information"
                                </p>
                              </div>
                            </div>
                          </div>)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
