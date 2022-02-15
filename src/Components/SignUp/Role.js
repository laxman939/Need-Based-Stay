import React from "react";

function Role() {
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
