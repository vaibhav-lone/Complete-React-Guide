import React, { Component } from "react";
import classList from "./App.css";
import Person from "./Person/Person";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";

class App extends Component {
  state = {
    persons: [
      { id: "asdf1", name: "Max", age: 28 },
      { id: "asdf2", name: "John", age: 29 },
      { id: "asdf3", name: "Mona", age: 26 }
    ]
  };

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
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundry key={person.id}>
                <Person
                  click={() => this.deleterPersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundry>
            );
          })}
        </div>
      );
      btnClass = classList.Red;
    }

    // lets create an array of classes which we will use for p element below
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(classList.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(classList.bold);
    }

    return (
      <div className={classList.App}>
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi, I'm React App!!!")
    // );
  }
}

export default App;
