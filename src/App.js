import React, { useState } from 'react';

function FullNameDisplay() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {error && <p>Please fill out this field.</p>}
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default FullNameDisplay;

