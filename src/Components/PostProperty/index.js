import React, { useState } from "react";
import StayType from "./StayType";
import "./style.css";

import { useSelector } from "react-redux";

import { Form, Select, Button, Upload } from "antd";

import { UploadOutlined } from "@ant-design/icons";

function PostProperty() {
  const { Option } = Select;

  const click = useSelector((state) => state.PostClick.postClick);
  console.log("click " + click);

  const [stays, setStays] = useState({
    propertyType: click,
    ownerName: "",
    propertyName: "",
    phoneNumber: "",
    location: "",
    preference: "",
    locationType: "",
    roomType: "",
    propertyImage: [],
    nearBy: [],
    address: "",
    State: "",
    Pcode: "",
  });

  // To get values
  function handleChange(e) {
    setStays({
      [e.target.name]: e.target.value,
    });

    console.log("stays phoneNumber" + stays.phoneNumber);
  }

  // Images
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <>
      <form className="post-property-container">
        <fieldset>
          <legend>Property Details</legend>
          <div className="stayType-section">
            <StayType />
          </div>

          <div className="prop-section-1">
            <div className="single-prop">
              <label htmlFor="ownerName" className="prop-label">
                Owner Name: &nbsp;
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                className="prop-input"
                value={stays.ownerName}
                onChange={handleChange}
              />
            </div>

            <div className="single-prop">
              <label htmlFor="pName" className="prop-label">
                Property Name: &nbsp;
              </label>
              <input
                type="text"
                id="pName"
                name="propertyName"
                className="prop-input"
                value={stays.propertyName}
                onChange={handleChange}
              />
            </div>
            <div className="single-prop">
              <label htmlFor="phoneNumber" className="prop-label">
                Phone: &nbsp;
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="prop-input"
                value={stays.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="address-section">
            <div className="address">
              <span>Address</span>
            </div>
            <div className="prop-section-2">
              <div className="single-prop">
                <label htmlFor="pLocation" className="prop-label">
                  Address: &nbsp;
                </label>
                <input
                  type="text"
                  id="pLocation"
                  name="location"
                  className="prop-input"
                  value={stays.address}
                  onChange={handleChange}
                />
              </div>

              <div className="single-prop">
                <label htmlFor="pLocation" className="prop-label">
                  City/Town: &nbsp;
                </label>
                <input
                  type="text"
                  id="pLocation"
                  name="location"
                  className="prop-input"
                  value={stays.location}
                  onChange={handleChange}
                />
              </div>
              <div className="single-prop">
                <label htmlFor="pLocation" className="prop-label">
                  State: &nbsp;
                </label>
                <input
                  type="text"
                  id="pLocation"
                  name="location"
                  className="prop-input"
                  value={stays.State}
                  onChange={handleChange}
                />
              </div>
              <div className="single-prop">
                <label htmlFor="pLocation" className="prop-label">
                  Postal Code: &nbsp;
                </label>
                <input
                  type="text"
                  id="pLocation"
                  name="location"
                  className="prop-input"
                  value={stays.Pcode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* <div className="prop-section-2"></div> */}

          {click === "pg" && (
            <div className="prop-section-3">
              <div className="single-prop">
                <label htmlFor="preference" className="prop-label-pg">
                  Preference: &nbsp;
                </label>
                <select
                  id="preference"
                  onChange={(e) => console.log("preferences " + e.target.value)}
                >
                  <option value="both">Both</option>
                  <option value="Students">Students</option>
                  <option value="Professionals">Professionals</option>
                </select>
              </div>

              <div className="single-prop">
                <label htmlFor="gender" className="prop-label-pg">
                  Gender: &nbsp;
                </label>
                <select
                  id="gender"
                  onChange={(e) => console.log("Gender " + e.target.value)}
                >
                  <option value="both">Both</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="single-prop">
                <label
                  htmlFor="property-type"
                  className="prop-label-pg location-type"
                >
                  Location Type: &nbsp;
                </label>
                <select
                  id="property-type"
                  onChange={(e) =>
                    console.log("Location Type " + e.target.value)
                  }
                >
                  <option value="none">None</option>
                  <option value="city">City</option>
                  <option value="outskirts">Outskirts</option>
                </select>
              </div>
            </div>
          )}

          <div className="prop-section">{/*  priceRange-- Todo */}</div>

          {click === "house" && (
            <div className="prop-section-4">
              <div className="single-prop">
                <label htmlFor="houseType" className="prop-label">
                  House Type: &nbsp;
                </label>
                <select
                  id="houseType"
                  onChange={(e) => console.log("House Type " + e.target.value)}
                >
                  <option value="flat">Flat</option>
                  <option value="independent">Independent</option>
                  <option value="gatedCommunity">Gated Community</option>
                </select>
              </div>

              <div className="single-prop">
                <label htmlFor="househtmlFor" className="prop-label-house">
                  House For: &nbsp;
                </label>
                <select
                  id="househtmlFor"
                  onChange={(e) => console.log("House For " + e.target.value)}
                >
                  <option value="anyone">Anyone</option>
                  <option value="family">Family</option>
                  <option value="bachelors">Bachelor's</option>
                </select>
              </div>
              <div className="single-prop">
                <label
                  htmlFor="property-type"
                  className="prop-label-house location-type"
                >
                  Location Type: &nbsp;
                </label>
                <select
                  id="property-type"
                  onChange={(e) =>
                    console.log("Location Type House " + e.target.value)
                  }
                >
                  <option value="none">None</option>
                  <option value="city">City</option>
                  <option value="outskirts">Outskirts</option>
                </select>
              </div>
            </div>
          )}

          {click === "pg" && (
            <div className="prop-section-5">
              <div className="roomType single-prop">
                <Form.Item
                  name="select-multiple"
                  label="Rooms: "
                  rules={[
                    {
                      message: `Room Types`,
                      type: "array",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    placeholder="Room Types 🔻"
                    onChange={(e) => console.log("Room " + e)}
                  >
                    <Option value="All">All</Option>
                    <Option value="SingleShare">Single Share</Option>
                    <Option value="TwoShare">Two Share</Option>
                    <Option value="ThreeShare">Three Share</Option>
                    <Option value="FourShare">Four Share</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="nearBy single-prop">
                <Form.Item
                  name="select-multiple"
                  label="Near By: "
                  rules={[
                    {
                      message: `Near By Places`,
                      type: "array",
                    },
                  ]}
                >
                  <Select
                    className="select"
                    mode="multiple"
                    placeholder="Near By Places 🔻"
                    onChange={(e) => console.log("Near By PG " + e)}
                  >
                    <Option value="BusStop">Bus Stop</Option>
                    <Option value="MetroStation">Metro Station</Option>
                    <Option value="Parks">Parks</Option>
                    <Option value="Theater">Theater</Option>
                    <Option value="Airport">Airport</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          )}

          <div className="prop-section-6">
            {click === "house" && (
              <div className="nearBy single-prop">
                <Form.Item
                  name="select-multiple"
                  label="Near By:: "
                  rules={[
                    {
                      message: `Near By Places`,
                      type: "array",
                    },
                  ]}
                >
                  <Select
                    className="select"
                    mode="multiple"
                    placeholder="Near By Places 🔻"
                    onSelect={(e) => console.log("Near By House" + e)}
                  >
                    <Option value="BusStop">Bus Stop</Option>
                    <Option value="MetroStation">Metro Station</Option>
                    <Option value="Parks">Parks</Option>
                    <Option value="Theater">Theater</Option>
                    <Option value="Airport">Airport</Option>
                  </Select>
                </Form.Item>
              </div>
            )}

            <div className="single-prop">
              <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </div>
          </div>

          <button type="submit" className="prop-button btn-secondary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default PostProperty;
