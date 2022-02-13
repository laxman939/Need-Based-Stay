import * as React from "react";
import FormLabel from "@mui/material/FormLabel";

export default function HousePreferredFilter() {
  return (
    <>
      <FormLabel id="housefor">House for: </FormLabel>
      <br />
      <div className="form-box">
        <label>
          <input type="radio" name="preferred" />
          <div className="circle"></div>
          <span>Bachelor's</span>
        </label>
        <label>
          <input type="radio" name="preferred" />
          <div className="circle"></div>
          <span>Family</span>
        </label>
      </div>
    </>
  );
}
