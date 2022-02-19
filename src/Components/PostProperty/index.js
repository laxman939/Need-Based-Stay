import React from "react";
import StayType from "./StayType";
import "./style.css";

function PostProperty() {
  return (
    <>
      <form className="post-property-container">
        <fieldset>
          <legend>Property Details:</legend>
          <div>
            <StayType />
          </div>

          <div>
            <label for="ownerName">Owner Name: &nbsp;</label>
            <input type="text" id="ownerName" name="ownerName" />

            <label for="pName">Property Name: &nbsp;</label>
            <input type="text" id="pName" name="pName" />
          </div>

          <div>
            <label for="phoneNumber">Phone Number: &nbsp;</label>
            <input type="text" id="phoneNumber" name="phoneNumber" />

            <label for="pLocation">Property Location: &nbsp;</label>
            <input type="text" id="pLocation" name="pLocation" />
          </div>

          <div>
            <label for="property-type">Location Type: &nbsp;</label>
            <select id="property-type">
              <option value="none">none</option>
              <option value="city">City</option>
              <option value="outskirts">Outskirts</option>
            </select>

            <label for="gender">Gender: &nbsp;</label>
            <select id="gender">
              <option value=""></option>
              <option value="both">Both</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label for="preference">Preference: &nbsp;</label>
            <select id="preference">
              <option value="both">Both</option>
              <option value="Students">Students</option>
              <option value="Professionals">Professionals</option>
            </select>

            {/* Todo -- Check boxes or multiple options  */}
            <label for="roomType">Room Type: &nbsp;</label>
            <select id="roomType">
              <option value="both">Both</option>
              <option value="singleShare">Single Share</option>
              <option value="twoShare">Two Share</option>
              <option value="threeShare">Three Share</option>
              <option value="fourShare">Four Share</option>
            </select>
          </div>

          <div>{/*  priceRange-- Todo */}</div>

          <div>
            <label for="houseType">House Type: &nbsp;</label>
            <select id="houseType">
              <option value="flat">Flat</option>
              <option value="independent">Independent</option>
              <option value="gatedCommunity">Gated Community</option>
            </select>

            <label for="houseFor">House For: &nbsp;</label>
            <select id="houseFor">
              <option value="family">Family</option>
              <option value="bachelors">Bachelor's</option>
            </select>
          </div>

          <div>
            {/*For NearBy places-- Todo*/}
            <label for="nearBy">Near By: &nbsp;</label>
            <input type="text" id="nearBy" name="nearBy" />
          </div>

          <div>
            <label for="property-pics">Upload Images</label>
            <input type="file" id="property-pics" />
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default PostProperty;
