import React, { useState, useEffect } from "react";

export function Hooks() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const name = useCustomHook("Robin", "Singh");

  useEffect(() => {
    if (name !== "") {
      document.title = name;
    } else {
      document.title = "React Hooks";
    }
    return () => {
      document.title = "Goodbye1";
    };
  });

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleSubmit() {
    document.title = "Loading...";
    setTimeout(function() {
      document.title = firstName + " " + lastName;
    }, 1000);
  }

  return (
    <div className="form-group">
      <label for="firstName">First Name: </label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        placeholder="Enter First Name here..."
        className="form-control"
        onChange={e => handleFirstNameChange(e)}
        required
      />
      <br />

      <label for="lastName">Last Name: </label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Enter Last Name here..."
        className="form-control"
        onChange={handleLastNameChange}
        required
      />
      <br />

      <label for="address">Address: </label>
      <input
        type="text"
        name="address"
        value={address}
        placeholder="Enter Address here..."
        className="form-control"
        onChange={handleAddressChange}
        required
      />
      <br />
      <br />

      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        ADD RECORD
      </button>
    </div>
  );
}

function useCustomHook(fName, lName) {
  return fName + " " + lName;
}
