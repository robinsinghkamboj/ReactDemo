import React, { useState, useEffect } from "react";

export function About() {
  const [contactNumber, setContactNumber] = useState();
  const number = useCustomHook();

  useEffect(() => {
    if (number !== null) {
      setContactNumber(number);
    }
    document.title = "About";
    return () => {
      document.title = "Goodbye2";
    };
  }, [number]);

  function handleNumberChange(e) {
    console.log(e.target.value);
    setContactNumber(e.target.value);
  }

  function handleSubmit() {
    document.title = "Loading...";
    setTimeout(function() {
      document.title = "About";
      alert(contactNumber)
    }, 1000);
  }

  return (
    <div className="form-group">
      <label for="contactNumber">Contact Number: </label>
      <input
        type="number"
        name="contactNumber"
        value={contactNumber}
        placeholder="Enter Contact Number here..."
        className="form-control"
        onChange={e => handleNumberChange(e)}
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

function useCustomHook() {
  return "9876543210";
}
