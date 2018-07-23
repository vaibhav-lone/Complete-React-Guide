import React from "react";
import classList from "./Person.css";

const person = props => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Something Went Wrong !!!");
  }
  return (
    // <p>I'm a person !!!</p> // this is static code
    // <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old !</p> // this is dynamic code
    // making component flexible, configurable and dynamic
    // Below is dynamic code and when working with classes we have to use 'this.props.name' and 'this.props.age'
    <div className={classList.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} placeholder={props.name} />
    </div>
  );
};

export default person;
