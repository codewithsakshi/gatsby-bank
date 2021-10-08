import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import User from "../logic/User";
import Account from "../logic/Account";
import db from "../db";

const DEFAULT_ADDRESS = {
  streetAddress: "",
  city: "Gwalior",
  country: "India",
  pincode: 474002
};

function UserForm({ closeModal }) {
  const onFinish = (values) => {
    const { fName, lName, email, phoneNo, streetAddress } = values;
    const address = { ...DEFAULT_ADDRESS, streetAddress };
    const user = new User(fName, lName, email, phoneNo, address);
    db.addUser(user);
    console.log(db.printUsers())
    closeModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="First Name" name="fName">
        <Input />
      </Form.Item>

      <Form.Item label="Last name" name="lName">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type="email" />
      </Form.Item>
      <Form.Item label="PhoneNo" name="phoneNo">
        <Input />
      </Form.Item>
      <Form.Item label="Street Address" name="streetAddress">
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserForm;
