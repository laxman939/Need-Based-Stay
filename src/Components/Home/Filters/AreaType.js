import * as React from "react";

import FormLabel from "@mui/material/FormLabel";

export default function AreaTypeFilter() {
  return (
    <>
      <FormLabel id="roomtype">Area Type: </FormLabel>
      <div className="form-box">
        <label htmlFor="single">
          <input type="radio" name="room" id="single" />
          <div className="circle"></div>
          <span className="filter-type-name">Single Share</span>
        </label>
        <label htmlFor="two">
          <input type="radio" name="room" id="two" />
          <div className="circle"></div>
          <span className="filter-type-name">Two Share</span>
        </label>
        <label htmlFor="three">
          <input type="radio" name="room" id="three" />
          <div className="circle"></div>
          <span className="filter-type-name">Three Share</span>
        </label>
        <label htmlFor="four">
          <input type="radio" name="room" id="four" />
          <div className="circle"></div>
          <span className="filter-type-name">Four Share</span>
        </label>
      </div>
    </>
  );
}
