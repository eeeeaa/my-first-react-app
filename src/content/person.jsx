import { useState } from "react";
import "./person.css";

export function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Lennon",
    age: 100,
  });
  const fullName = person.firstName + " " + person.lastName;

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const handleFirstNameChange = (firstName) => {
    const newPerson = { ...person, firstName };
    setPerson(newPerson);
  };

  const handleLastNameChange = (lastName) => {
    const newPerson = { ...person, lastName };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <div className="input-field">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={person.firstName}
          onChange={(e) => handleFirstNameChange(e.target.value)}
        ></input>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={person.lastName}
          onChange={(e) => handleLastNameChange(e.target.value)}
        ></input>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </div>
    </>
  );
}
