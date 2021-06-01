import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

  const [filterName, setFilterName] = useState('');
  const nameToShow =
    filterName === ''
      ? persons
      : persons.filter((person) => person.name.toLowerCase() === filterName);

  const addName = (event) => {
    event.preventDefault();
    if (persons.findIndex((person) => person.name === newName) !== -1) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      return;
    }
    const nameObj = {
      name: newName,
      id: persons.length,
      number: newNumber,
    };
    console.log(nameObj);
    setPersons(persons.concat(nameObj));
    setNewName('');
    setNewNumber('');
  };
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <h3>add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={nameToShow}/>
    </div>
  );
};

export default App;
