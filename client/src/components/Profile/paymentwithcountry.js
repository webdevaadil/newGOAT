import React, { useState, useEffect, useRef } from "react";


import { Country, State, City } from "country-state-city";
import Select from "react-select";

import style from "./Package.css";

import axios from "axios";
import ListPaymentMethods from "./ListPaymentMethods";
import { useSelector } from "react-redux";

export default function AddPayMethod({getPaymentMethods,packages}) {
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const elements = useElements();
  const card = useRef();

  const [cardInfo, setCardInfo] = useState({
    name: "",
    expiry: "",
    number: "",
    address: {
      line: "",
      postalCode: "",
    },
  });

  const [locations, setLocations] = useState({ countries: "", states: "", cities: "" });
  const [selectedLocation, setSelectedLocation] = useState({ country: {}, city: {}, state: {} });

  function handleChangeAddressLine(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, address: { ...prev.address, line: value } };
    });
  }

  // function handleChangePostalCode(e) {
  //   const { value } = e.target;
  //   setCardInfo((prev) => {
  //     return { ...prev, address: { ...prev.address, postalCode: value } };
  //   });
  // }

  function handleChangeName(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, name: value };
    });
  }

  function parseForSelect(arr) {
    return arr.map((item) => ({
      label: item.name,
      value: item.isoCode ? item.isoCode : item.name,
    }));
  }

  function handleSelectCountry(country) {
    const states = State.getStatesOfCountry(country.value);
    setSelectedLocation((prev) => {
      return { ...prev, country };
    });
    setLocations((prev) => ({ ...prev, states: parseForSelect(states) }));
  }

  function handleSelectState(state) {
    const cities = City.getCitiesOfState(selectedLocation.country.value, state.value);
    setSelectedLocation((prev) => {
      return { ...prev, state };
    });

    setLocations((prev) => ({ ...prev, cities: parseForSelect(cities) }));
  }

  function handleSelectCity(city) {
    setSelectedLocation((prev) => {
      return { ...prev, city };
    });
  }

  async function handleSubmit(e) {
    // e.preventDefault()
    const address = cardInfo.address;
    const billingDetails = {
      name: cardInfo.name,
      address: {
        country: address.country,
        state: address.state,
        city: address.city,
        line1: address.line,
      },
    };

   
  }

  useEffect(() => {
  if(user){
    handleSubmit()
  }

    const allCountry = Country.getAllCountries();

    setLocations((prev) => {
      return { ...prev, countries: parseForSelect(allCountry) };
    });
  }, []);


  const cardElementOptions = {
    style: {
      base: {
        color: "#666",
        fontSize: "18px",
        border:"1px solid"
      },
      invalid: {
        color: "#fa755a",
        fontSize: "18px",
      }
    }
  }


const statecitystyle = {
  option: (provided, state) => ({
    ...provided,
    width:230
  }),
  container: (provided, state) => ({
    ...provided,
    width:230
  }),
}


  return (
    <div className={style.wrapper}>
      <div className="main-label">
        {/* <div className={style.title}>Add Payment Method</div> */}
        <div className="inputrow mb-3">
          <label>Cardholder Name</label>
          <input
            onChange={handleChangeName}
            type="text"
            name="name"
            placeholder="Enter card holder name"
            className = "input-border"
          />
        </div>
        <label>Enter Card Details</label>
        <div  className = "input-border">
          <CardElement options={cardElementOptions}  ref={card} />
        </div>

        <div style = {{marginTop:"10px"}} className={style.addressWrapper}>
          {/* <div className="inputrow">
            <label>Address</label>
            <input
              onChange={handleChangeAddressLine}
              type="text"
              name="address"
              placeholder="Enter Full Address"
              autoComplete="new-password"
              className="input-border"
              style = {{border:"1px solid hsl(0deg 0% 84%)"}}
            />
          </div> */}
          <div className={style.rowSelect}>
            <div>
              <label>Country</label>
              <Select
                isClearable={true}
                isSearchable={true}
                name="country"
                value={selectedLocation.country}
                options={locations.countries}
                onChange={handleSelectCountry}
              />
            </div>

              </div>

<div className="flex-state">

            {/* <div>
              <label>State</label>
              <Select
                isClearable={true}
                isSearchable={true}
                name="state"
                styles = {statecitystyle}
                value={selectedLocation.state}
                options={locations.states}
                onChange={handleSelectState}
              />
            </div> */}
          <div className={style.rowSelect}>
            {/* <div>
              <label>City</label>
              <Select
                isClearable={true}
                styles = {statecitystyle}
                isSearchable={true}
                name="city"
                value={selectedLocation.city}
                options={locations.cities}
                onChange={handleSelectCity}
              />
            </div> */}

            {/* <div>
              <label>Postal Code</label>
              <input onChange={handleChangePostalCode} type="text" placeholder="Enter Zip Code" />
            </div> */}
          </div>
</div>

          {/* <div className="pay-btn">
            <button className="homelogin" onClick={handleSubmit}>Submit</button>
          </div> */}

        </div>
      </div>
      {/* <ListPaymentMethods/> */}
    </div>
  );
}
