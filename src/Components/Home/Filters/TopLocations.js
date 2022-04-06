import * as React from "react";

import { Form, Select } from "antd";

export default function TopLocations() {
  const { Option } = Select;

  return (
    <div className="Top-section">
      <Form.Item
        id="top-formItem"
        name="select-multiple"
        label="Select Loaction: "
        rules={[
          {
            message: `Top location`,
            type: "array",
          },
        ]}
      >
        <Select
          id="top-Select"
          placeholder="Top Location 🔻"
          onChange={(e) => console.log("Top Location " + e)}
        >
          <Option value="">None</Option>
          <Option value="DilsukhNagar">Dilsukh Nagar</Option>
          <Option value="Mehidipatnam">Mehidipatnam</Option>
          <Option value="Koti">Koti</Option>
          <Option value="Abids">Abids</Option>
          <Option value="Ibrahimpatnam">Ibrahimpatnam</Option>
          <Option value="gacchibowli">gacchibowli</Option>
          <Option value="LBNagar">LB nagar</Option>
          <Option value="Secundrabad">Secundrabad</Option>
          <Option value="Uppal">Uppal</Option>
          <Option value="Hasthinapuram">Hasthinapuram</Option>
        </Select>
      </Form.Item>
    </div>
  );
}
