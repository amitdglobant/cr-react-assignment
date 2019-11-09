import React from "react";
import { Spinner } from "reactstrap";

export const SpinnerComponent = props => {
  return (
    <div className="table-info">
      <h4>{props.message}</h4>
      <Spinner color={props.color} />
    </div>
  );
};
