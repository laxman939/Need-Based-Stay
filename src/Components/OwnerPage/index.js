import React from "react";

import { useSelector } from "react-redux";

function OwnerPage() {
  const name = useSelector((state) => state.UserName.userName);

  return (
    <div>
      <h1>Owner Information</h1>
      <h3>Hello {name}</h3>
    </div>
  );
}

export default OwnerPage;
