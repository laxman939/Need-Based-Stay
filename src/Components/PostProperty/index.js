import React from "react";
import Role from "../SignUp/Role";

function PostProperty() {
  return (
    <>
      <Role />
      <form className="post-property-container">
        <fieldset>
          <legend>Property Details</legend>
          <label for="ownerName">Owner Name</label>
          <input type="text" id="ownerName" name="ownerName" />

          <label for="pName">Property Name</label>
          <input type="text" id="pName" name="pName" />

          <label for="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" />

          <label for="pLocation">Property Location</label>
          <input type="text" id="pLocation" name="pLocation" />

          <label for="pType">Property Type</label>
          <input type="text" id="pType" name="pType" />

          <label for="gender">Gender</label>
          <input type="text" id="gender" name="gender" />

          <label for="pLocation">Property Location</label>
          <input type="text" id="pLocation" name="pLocation" />

          <label for="pLocation">Property Location</label>
          <input type="text" id="pLocation" name="pLocation" />

          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </>
  );
}

export default PostProperty;
