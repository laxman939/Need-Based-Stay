import * as React from "react";

import FormLabel from "@mui/material/FormLabel";

export default function AreaTypeFilter() {
  return (
    <>
      <FormLabel id="roomtype">Area Type: </FormLabel>
      <div className="form-box">
        <label htmlFor="city">
          <input type="radio" name="area" id="city" />
          <div className="circle"></div>
          <span className="filter-type-name">City</span>
        </label>
        <label htmlFor="outskirts">
          <input type="radio" name="area" id="outskirts" />
          <div className="circle"></div>
          <span className="filter-type-name">OutSkirts</span>
        </label>
      </div>
    </>
  );
}
