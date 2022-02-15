import React from "react";

import { useSelector } from "react-redux";

import Loader from "../Spinner/Loader";

// import { Link } from "react-router-dom";

function HouseResults() {
  const stays = useSelector((state) => state.stays.stays);

  console.log("stays " + stays);

  return (
    <>
      {!stays && <Loader />}
      {stays &&
        stays.map((house) => (
          <div className="property-container" key={house._id}>
            {/* <Link to={single post}> */}
            <div className="row single-property">
              <div className="row">
                <div className="col">
                  <h5>{house.propertyName}</h5>
                  <footer>
                    <span>Location: </span>
                    {house.propertyLocation}
                  </footer>
                </div>
                <div className="col">
                  {/* <p>
            <span>Gender: </span>
            {house.gender}
          </p> */}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <img
                    id="image"
                    src="https://st4.depositphotos.com/16030310/25210/v/600/depositphotos_252105266-stock-illustration-vector-illustration-silver-golden-letters.jpg"
                    alt="house"
                  />
                </div>
                <div className="col">
                  <h5>Details</h5>
                  <p>
                    <span></span>
                    {house.description}
                  </p>
                </div>
                <div className="col">
                  <h5>Details</h5>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        ))}
    </>
  );
}
export default HouseResults;
