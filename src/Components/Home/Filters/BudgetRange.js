import React from "react";

export default function BudgetRange() {
  return (
    <React.Fragment>
      <label for="customRange3" class="form-label">
        Price Range
      </label>
      <input
        type="range"
        class="form-range"
        min="0"
        max="5"
        step="1"
        id="customRange3"
      />
    </React.Fragment>
  );
}
