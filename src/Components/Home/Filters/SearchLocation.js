import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// const api = Axios.create({
//   baseURL: "https://need-based-stay.herokuapp.com/filter",
// });

export default function SearchLocation() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div id="searchLocation">
        <TextField
          id="standard-search"
          label="Search Location"
          type="search"
          variant="standard"
        />
      </div>
    </Box>
  );
}
