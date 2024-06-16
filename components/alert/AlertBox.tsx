import React from "react";
import { Alert } from "antd";

interface AlertBoxProps {
  message: string;
  description: string;
}
const AlertBox = ({ message, description }: AlertBoxProps) => {
  return (
    <div className="md:flex md:justify-center md:items-center">
      <Alert
        message={message}
        description={description}
        type="success"
        showIcon
        className=" w-full md:w-80"
      />
    </div>
  );
};

export default AlertBox;
