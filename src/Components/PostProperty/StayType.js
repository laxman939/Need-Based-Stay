import React from "react";

import { useDispatch } from "react-redux";

import { actionCreators } from "../../Redux/index";

function StayType() {
  const dispatch = useDispatch();

  const { postClickAction } = actionCreators;

  function selectStay(event) {
    // console.log("Post " + event.target.value);

    dispatch(postClickAction(event.target.value));
  }

  return (
    <>
      <div className="stay">
        <div className="stay_select">
          <input
            className="stay_input"
            type="radio"
            name="myRadio"
            value="house"
            id="myRadio1"
            onClick={selectStay}
          />
          <label className="stay_label" htmlFor="myRadio1">
            House
          </label>
        </div>
        <div className="stay_select">
          <input
            className="stay_input"
            type="radio"
            name="myRadio"
            value="pg"
            id="myRadio2"
            onClick={selectStay}
          />
          <label className="stay_label" htmlFor="myRadio2">
            PG
          </label>
        </div>
      </div>
    </>
  );
}

export default StayType;
