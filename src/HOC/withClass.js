import React from "react";

const withClass = props => (
  <div className={props.myClasses}>{props.children}</div>
);

export default withClass;
