import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const options = ["Option 1", "Option 2"];
const names = [
  "",
  "Dilsukh Nagar",
  "Mehidipatnam",
  "Koti",
  "Abids",
  "Ibrahimpatnam",
  "gacchibowli",
  "LB nagar",
  "Hasthinapuram",
  "Uppal",
  "Secundrabad",
];

export default function TopLocations() {
  const [value, setValue] = React.useState(names[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [location, setLocation] = React.useState("");

  // console.log("location " + location);

  return (
    <div id="toplocation">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={names}
        renderInput={(params) => (
          <TextField
            className="top-location-textfield"
            variant="standard"
            {...params}
            label="Select a Location"
            onSelect={(e) => setLocation(e.target.value)}
          />
        )}
      />
    </div>
  );
}
