import React from "react";

import { useSelector } from "react-redux";

// import Loader from "../Spinner/Loader";

// import { Link } from "react-router-dom";

function HouseResults() {
  const stays = useSelector((state) => state.Stays.stays);

  console.log("stays " + stays);

  return (
    <>
      {!stays && <h1>Loading...</h1>}
      {stays &&
        stays.map((house) => (
          <div className="property-container" key={house._id}>
            {/* <Link to={single post}> */}
            <div className="row single-property">
              <div className="row row-one">
                <div className="col">
                  <h5>{house.propertyName}</h5>
                  <footer>
                    <span>Location: </span>
                    {house.propertyLocation}
                  </footer>
                </div>
                <div className="col"></div>
              </div>
              <div className="row row-two">
                <div className="col">
                  {
                    <img
                      className="image-container"
                      src={house.propertyImage[0]}
                      alt="houses"
                    />
                  }
                  {/* <img
                    className="image"
                    src={house.propertyImage[1]}
                    alt="house"
                  /> */}
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
