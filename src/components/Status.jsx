import React from "react";
import { GoPrimitiveDot } from "react-icons/all";
import "../scss/components/status.scss";
const Status = ({ status }) => {
  return (
    <div className={`status ${status.toLowerCase()} display-flex ai-center jc-center`}>
      <GoPrimitiveDot />
      {status}
    </div>
  );
};

export default Status;
