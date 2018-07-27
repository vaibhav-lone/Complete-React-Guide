import React, { PureComponent } from "react";
import classList from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../HOC/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props); // whenever we extend a class we have to use the super () method to initialize the parameters which are in Component class // only constructor can access the props but for others we have to use the this.props to access the content of the Component class
    console.log("[App.js] inside constructor");
    this.state = {
      persons: [
        { id: "asdf1", name: "Max", age: 28 },
        { id: "asdf2", name: "John", age: 29 },
        { id: "asdf3", name: "Mona", age: 26 }
      ]
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate()",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // Alternate approach:
    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deleterPersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); // This is a bad approach because we are mutating the original state here as we are passing the reference of the original state here which will mutate the original state. To avoid this problem we can use two methods: 1. use slice() without parameters it will create a new array and 2. use the spread operator which also works the same way
    // const persons = this.state.persons.slice(); // Method 1
    const persons = [...this.state.persons]; // Method 2: this is modern method to create a new array without mutating the original one
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App.js] Inside the render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deleterPersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithClass myClasses={classList.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
