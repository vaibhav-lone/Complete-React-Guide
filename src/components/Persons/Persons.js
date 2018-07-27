import React, { Component } from "react";
import Person from "./Person/Person";
// import ErrorBoundry from "../../ErrorBoundry/ErrorBoundry";

class Persons extends Component {
  constructor(props) {
    super(props); // whenever we extend a class we have to use the super () method to initialize the parameters which are in Component class // only constructor can access the props but for others we have to use the this.props to access the content of the Component class
    console.log("[Persons.js] inside constructor");
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillReceiveProps()",
      nextProps
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside shouldComponentUpdate()",
      nextProps,
      nextState
    );
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
  }

  render() {
    console.log("[Persons.js] Inside the render()");
    return this.props.persons.map((person, index) => {
      return (
        // <ErrorBoundry key={person.id}>
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
        // </ErrorBoundry>
      );
    });
  }
}

export default Persons;
