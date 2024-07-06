// Form.jsx

import React, { useReducer } from 'react';

// Initial state for the form
const initialState = {
  email: '',
  password: '',
  submitted: false // To track if form has been submitted
};

// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'submit':
      return { ...state, submitted: true };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'submit' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input
            type="email"
            id="emailInput"
            value={state.email}
            onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordInput">Password:</label>
          <input
            type="password"
            id="passwordInput"
            value={state.password}
            onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {state.submitted ? (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </div>
  );
};

export default Form; // Exporting Form as the default export
