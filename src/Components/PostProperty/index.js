import React, { useState, useRef } from "react";
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
  // Near By
  let [showNearBy, setShowNearBy] = useState(false);
  const nearRef = useRef();

  function nearCheckBoxes() {
    if (!showNearBy) {
      nearRef.current.style.display = "block";
    } else {
      nearRef.current.style.display = "none";
    }
  }

  // Room Type
  let [showRoomType, setShowRoomType] = useState(true);
  const showRef = useRef();

  function showCheckBoxes() {
    if (showRoomType) {
      showRef.current.style.display = "block";
    } else {
      showRef.current.style.display = "none";
    }
  }

  // To get values
  function handleChange(e) {
    setHouse({
      [e.target.name]: e.target.value,
    });

    setPg({
      [e.target.name]: e.target.value,
    });
  }
  if (click === "house") {
    // console.log("house " + house.propertyName + house.location);
  }
  if (click === "pg") {
    // console.log("pg " + pg.propertyName + pg.location);
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
                <div>
                  <label
                    htmlFor="property-type"
                    className="prop-label location-type"
                  >
                    Location Type: &nbsp;
                  </label>
                  <select id="property-type">
                    <option value="none">None</option>
                    <option value="city">City</option>
                    <option value="outskirts">Outskirts</option>
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
                  <option value="anyone">Anyone</option>
                  <option value="family">Family</option>
                  <option value="bachelors">Bachelor's</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="property-type"
                  className="prop-label location-type"
                >
                  Location Type: &nbsp;
                </label>
                <select id="property-type">
                  <option value="none">None</option>
                  <option value="city">City</option>
                  <option value="outskirts">Outskirts</option>
                </select>
              </div>
            </div>
          )}

          <div className="multipleSelection">
            <div className="mSelection">
              <label htmlFor="nearBy" className="prop-label">
                Near By
              </label>
              <div
                className="selectBox"
                onClick={() => {
                  nearCheckBoxes();
                  setShowNearBy(!showNearBy);
                }}
              >
                <select id="nearBy">
                  <option id="near-select-option">Select options</option>
                </select>
                <div className="overSelect"></div>
              </div>
              <div id="nearCheckBoxes" ref={nearRef}>
                <label htmlFor="all">
                  <input type="checkbox" id="all" />
                  Parks
                </label>
                <label htmlFor="first">
                  <input type="checkbox" id="first" />
                  Theater
                </label>
                <label htmlFor="second">
                  <input type="checkbox" id="second" />
                  Bus Stop
                </label>
                <label htmlFor="third">
                  <input type="checkbox" id="third" />
                  Three Share
                </label>
                <label htmlFor="fourth">
                  <input type="checkbox" id="fourth" />
                  Four Share
                </label>
              </div>
            </div>

            {click === "pg" && (
              <div className="mSelection">
                <label htmlFor="roomType" className="prop-label">
                  Room Type:
                </label>
                <div
                  className="selectBox"
                  onClick={() => {
                    showCheckBoxes();
                    setShowRoomType(!showRoomType);
                  }}
                >
                  <select id="roomType">
                    <option id="select-option">Select options</option>
                  </select>
                  <div className="overSelect"></div>
                </div>
                <div id="checkBoxes" ref={showRef}>
                  <label htmlFor="all">
                    <input type="checkbox" id="all" />
                    all
                  </label>
                  <label htmlFor="first">
                    <input type="checkbox" id="first" />
                    Single Share
                  </label>
                  <label htmlFor="second">
                    <input type="checkbox" id="second" />
                    Two Share
                  </label>
                  <label htmlFor="third">
                    <input type="checkbox" id="third" />
                    Three Share
                  </label>
                  <label htmlFor="fourth">
                    <input type="checkbox" id="fourth" />
                    Four Share
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="img-prop-section">
            <label htmlFor="property-pics" className="img-prop-label">
              Images
            </label>
            <div className="image-section">
              <div>
                <input
                  type="file"
                  id="property-pics"
                  className="img-prop-input"
                  name="propertyImage"
                  value={house.propertyImage}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="upload-btn">
                  Upload
                </button>
              </div>
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
