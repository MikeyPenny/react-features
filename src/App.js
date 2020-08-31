import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


function App() {

  const [ personState, setPersonState ] = useState({
    persons: [
      { name: 'Mike', age: 42 },
      { name: 'Ale', age: 40 },
      { name: 'Nico', age: 2 },
      { name: 'Bruce', age: 4 }
    ],
    
  });

  const [togglePerson, setTogglePerson] = useState({ showPersons: false });


  const nameChangeHandler = (e) => {
    let target = parseInt(e.target.id);
    let arrayTemp = [...personState.persons];
    arrayTemp[target].name = e.target.value;
    setPersonState({persons: arrayTemp});
  }

  const togglePersonHandler = () => {
    let doesShow = togglePerson.showPersons;
    setTogglePerson({
      showPersons: !doesShow
    });
  }

  const deletePersonHandler = (indexPerson) => {
    console.log(indexPerson);
    let personsTemp = [...personState.persons];
    personsTemp.splice(indexPerson, 1);
    setPersonState({persons: personsTemp});
  }

  let personsJsx = null;

  if (togglePerson.showPersons) {
    personsJsx = personState.persons.map((person, index) => {
      return <Person
              key={index.toString()} 
              index={index}
              name={person.name}
              age={person.age}
              editName={nameChangeHandler}
              clicked={deletePersonHandler}
            />
    });
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }

  let classes = [];

  if(personState.persons.length <=2) {
    classes.push('red')
  }
  if(personState.persons.length <= 1) {
    classes.push('bold');
  }

  return (
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!!</p>
          <button className="button" alt={togglePerson.showPersons} onClick={togglePersonHandler}>Toggle Persons</button>
          {personsJsx}
        </div>
    );
}

export default App;
