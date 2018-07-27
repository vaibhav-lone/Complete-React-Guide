import React from "react";
import classList from "./Cockpit.css";
import Aux from "../../HOC/Aux";

const Cockpit = props => {
  // lets create an array of classes which we will use for p element below
  const classes = [];
  let btnClass = classList.Button;

  if (props.showPersons) {
    btnClass = [classList.Button, classList.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    classes.push(classList.red);
  }
  if (props.persons.length <= 1) {
    classes.push(classList.bold);
  }
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default Cockpit;
