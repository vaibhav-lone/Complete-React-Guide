import React, { Component } from "react";
import classList from "./Person.css";
import WithClass from "../../../HOC/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor");
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }
  render() {
    return (
      // <p>I'm a person !!!</p> // this is static code
      // <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old !</p> // this is dynamic code
      // making component flexible, configurable and dynamic
      // Below is dynamic code and when working with classes we have to use 'this.props.name' and 'this.props.age'
      <WithClass myClasses={classList.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old !
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          placeholder={this.props.name}
        />
      </WithClass>
    );
  }
}

export default Person;
