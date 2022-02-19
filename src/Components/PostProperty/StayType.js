import React from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { actionCreators } from "../../Redux/index";

function StayType() {
  //   const dispatch = useDispatch();

  //   const { RoleCheck } = actionCreators;

  //   function selectRole(event) {
  //     console.log(event.target.value);

  //     dispatch(RoleCheck(event.target.value));
  //   }

  return (
    <>
      <div className="role">
        <div className="role_select">
          <input
            className="role_input"
            type="radio"
            name="myRadio"
            value="house"
            id="myRadio1"
            // onClick={selectRole}
          />
          <label className="role_label" htmlFor="myRadio1">
            House
          </label>
        </div>
        <div className="role_select">
          <input
            className="role_input"
            type="radio"
            name="myRadio"
            value="pg"
            id="myRadio2"
            // onClick={selectRole}
          />
          <label className="role_label" htmlFor="myRadio2">
            PG
          </label>
        </div>
      </div>
    </>
  );
}

export default StayType;
