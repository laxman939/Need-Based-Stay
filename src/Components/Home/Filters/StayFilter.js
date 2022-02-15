import * as React from "react";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators } from "../../../Redux/index";

import { fetchStays } from "../../../Redux/Actions/stayActions";

export default function StayFilter() {
  const { pgClick, houseClick } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { pgClickAction, houseClickAction } = actionCreators;

  const handleClickPg = () => {
    dispatch(pgClickAction(!pgClick));
    dispatch(houseClickAction(houseClick));
  };
  const handleClickHouse = () => {
    dispatch(pgClickAction(pgClick));
    dispatch(houseClickAction(!houseClick));

    dispatch(fetchStays());
  };

  return (
    <>
      <div className="stays">
        <div className="radio">
          <input
            className="radio_input"
            type="radio"
            name="myRadio"
            value="houses"
            id="myRadio1"
            onClick={handleClickHouse}
          />
          <label className="radio_label" htmlFor="myRadio1">
            Houses
          </label>
        </div>
        <div className="radio">
          <input
            className="radio_input"
            type="radio"
            name="myRadio"
            value="pgs"
            id="myRadio2"
            onClick={handleClickPg}
          />
          <label className="radio_label" htmlFor="myRadio2">
            Pgs/Hostels
          </label>
        </div>
      </div>
    </>
  );
}
