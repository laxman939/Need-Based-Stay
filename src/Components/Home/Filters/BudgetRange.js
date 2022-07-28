import React from "react";

import FormLabel from "@mui/material/FormLabel";

export default function BudgetRange() {
  return (
    <React.Fragment>
      <FormLabel id="roomtype">Budget Range: </FormLabel>
      <div className="priceRange">
        <input
          type="range"
          class="form-range"
          min="4000"
          max="8000"
          step="1000"
          id="customRange1"
        />
        <p className="price">Price:</p>
      </div>
    </React.Fragment>
  );
}
