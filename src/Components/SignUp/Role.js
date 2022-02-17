import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators } from "../../Redux/index";

function Role() {
  const dispatch = useDispatch();

  // const [roleType, setRoleType] = useState("");

  const { RoleCheck } = actionCreators;

  function selectRole(event) {
    console.log(event.target.value);

    dispatch(RoleCheck(event.target.value));
  }

  return (
    <>
      <div className="role">
        <div className="role_select">
          <input
            className="role_input"
            type="radio"
            name="myRadio"
            value="user"
            id="myRadio1"
            onClick={selectRole}
          />
          <label className="role_label" htmlFor="myRadio1">
            User
          </label>
        </div>
        <div className="role_select">
          <input
            className="role_input"
            type="radio"
            name="myRadio"
            value="owner"
            id="myRadio2"
            onClick={selectRole}
          />
          <label className="role_label" htmlFor="myRadio2">
            Owner
          </label>
        </div>
      </div>
    </>
  );
}

export default Role;
