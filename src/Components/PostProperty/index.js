import React, { useState } from "react";
import StayType from "./StayType";
import "./style.css";

import { useSelector } from "react-redux";

function PostProperty() {
  const click = useSelector((state) => state.PostClick.postClick);

  const [pg, setPg] = useState({
    propertyType: "PG",
    ownerName: "",
    propertyName: "",
    phoneNumber: "",
    location: "",
    preference: "",
    locationType: "",
    roomType: "",
    propertyImage: [],
    nearBy: [],
  });

  const [house, setHouse] = useState({
    propertyType: "HOUSE",
    ownerName: "",
    propertyName: "",
    phoneNumber: "",
    location: "",
    preference: "",
    locationType: "",
    roomType: "",
    propertyImage: [],
    nearBy: [],
  });

  function handleChange(e) {
    setHouse({
      [e.target.name]: e.target.value,
    });

    setPg({
      [e.target.name]: e.target.value,
    });
  }
  if (click === "house") {
    console.log("house " + house.propertyName + house.location);
  }
  if (click === "pg") {
    console.log("pg " + pg.propertyName + pg.location);
  }

  return (
    <>
      <form className="post-property-container">
        <fieldset>
          <legend>Property Details</legend>
          <div className="stay-select">
            <StayType />
          </div>

          <div className="prop-section">
            <div>
              <label htmlFor="ownerName" className="prop-label">
                Owner Name: &nbsp;
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                className="prop-input"
                value={house.ownerName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="pName" className="prop-label">
                Property Name: &nbsp;
              </label>
              <input
                type="text"
                id="pName"
                name="propertyName"
                className="prop-input"
                value={house.propertyName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="prop-section">
            <div>
              <label htmlFor="phoneNumber" className="prop-label">
                Phone Number: &nbsp;
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="prop-input"
                value={house.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="pLocation" className="prop-label">
                Property Location: &nbsp;
              </label>
              <input
                type="text"
                id="pLocation"
                name="location"
                className="prop-input"
                value={house.location}
                onChange={handleChange}
              />
            </div>
          </div>

          {click === "pg" && (
            <>
              <div className="prop-section">
                <div>
                  <label htmlFor="preference" className="prop-label">
                    Preference: &nbsp;
                  </label>
                  <select id="preference">
                    <option value="both">Both</option>
                    <option value="Students">Students</option>
                    <option value="Professionals">Professionals</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="gender" className="prop-label">
                    Gender: &nbsp;
                  </label>
                  <select id="gender">
                    <option value=""></option>
                    <option value="both">Both</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Todo -- Check boxes or multiple options  */}
                <div>
                  <label htmlFor="roomType" className="prop-label">
                    Room Type: &nbsp;
                  </label>
                  <select id="roomType">
                    <option value="all">All</option>
                    <option value="singleShare">Single Share</option>
                    <option value="twoShare">Two Share</option>
                    <option value="threeShare">Three Share</option>
                    <option value="fourShare">Four Share</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div className="prop-section">{/*  priceRange-- Todo */}</div>

          {click === "house" && (
            <div className="prop-section">
              <div>
                <label htmlFor="houseType" className="prop-label">
                  House Type: &nbsp;
                </label>
                <select id="houseType">
                  <option value="flat">Flat</option>
                  <option value="independent">Independent</option>
                  <option value="gatedCommunity">Gated Community</option>
                </select>
              </div>

              <div>
                <label htmlFor="househtmlFor" className="prop-label">
                  House For: &nbsp;
                </label>
                <select id="househtmlFor">
                  <option value="family">Family</option>
                  <option value="bachelors">Bachelor's</option>
                </select>
              </div>
            </div>
          )}

          <div className="prop-section">
            {/*htmlFor NearBy places-- Todo*/}
            <div>
              <label htmlFor="nearBy" className="prop-label">
                Near By: &nbsp;
              </label>
              <input
                type="text"
                id="nearBy"
                name="nearBy"
                className="prop-input"
                value={house.nearBy}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="property-type" className="prop-label">
                Location Type: &nbsp;
              </label>
              <select id="property-type">
                <option value="none">none</option>
                <option value="city">City</option>
                <option value="outskirts">Outskirts</option>
              </select>
            </div>
          </div>

          <div className="prop-section">
            <div>
              <label htmlFor="property-pics" className="prop-label">
                Upload
              </label>
              <input
                type="file"
                id="property-pics"
                className="prop-input"
                name="propertyImage"
                value={house.propertyImage}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="prop-button">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default PostProperty;
