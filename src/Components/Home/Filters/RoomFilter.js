import * as React from "react";

import FormLabel from "@mui/material/FormLabel";

export default function RoomFilter() {
  return (
    <>
      <FormLabel id="roomtype">Room Type: </FormLabel>
      <div className="form-box">
        <label htmlFor="single">
          <input type="checkbox" name="room" id="single" />
          <div className="circle"></div>
          <span className="filter-type-name">Single Share</span>
        </label>
        <label htmlFor="two">
          <input type="checkbox" name="room" id="two" />
          <div className="circle"></div>
          <span className="filter-type-name">Two Share</span>
        </label>
        <label htmlFor="three">
          <input type="checkbox" name="room" id="three" />
          <div className="circle"></div>
          <span className="filter-type-name">Three Share</span>
        </label>
        <label htmlFor="four">
          <input type="checkbox" name="room" id="four" />
          <div className="circle"></div>
          <span className="filter-type-name">Four Share</span>
        </label>
      </div>
    </>
  );
}
