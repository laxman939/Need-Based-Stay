import React from "react";
import StayType from "./StayType";
import "./style.css";

function PostProperty() {
  return (
    <>
      <htmlForm className="post-property-container">
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
              />
            </div>

            <div>
              <label htmlFor="pName" className="prop-label">
                Property Name: &nbsp;
              </label>
              <input
                type="text"
                id="pName"
                name="pName"
                className="prop-input"
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
              />
            </div>

            <div>
              <label htmlFor="pLocation" className="prop-label">
                Property Location: &nbsp;
              </label>
              <input
                type="text"
                id="pLocation"
                name="pLocation"
                className="prop-input"
              />
            </div>
          </div>

          <div className="prop-section">
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
          </div>

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

            {/* Todo -- Check boxes or multiple options  */}
            <div>
              <label htmlFor="roomType" className="prop-label">
                Room Type: &nbsp;
              </label>
              <select id="roomType">
                <option value="both">Both</option>
                <option value="singleShare">Single Share</option>
                <option value="twoShare">Two Share</option>
                <option value="threeShare">Three Share</option>
                <option value="fourShare">Four Share</option>
              </select>
            </div>
          </div>

          <div className="prop-section">{/*  priceRange-- Todo */}</div>

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
              />
            </div>
          </div>

          <div className="prop-section">
            <div>
              <label htmlFor="property-pics" className="prop-label">
                Upload Images
              </label>
              <input type="file" id="property-pics" className="prop-input" />
            </div>
          </div>

          <button type="submit" className="prop-button">
            Submit
          </button>
        </fieldset>
      </htmlForm>
    </>
  );
}

export default PostProperty;
