createContext
useContext
-------------------Context API
createContext - >
its a function - react.createContext('default value as param');
returns object {
    consumer : <- access value within a component
    provider: <- wrap that part of the tree where you want to make the context available.
}

useContext- react hook
It takes a context object (created by createContext) as an argument and returns the current context value for that context.

createContext is used to create a new context, while useContext is used to consume the value of a context within a functional component
auth
theme
etc -- globally accessable data.

hooks------------------

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // Declare state variables using the useState hook
  const [myState, setMyState] = useState(initialValue);

  // useEffect hook for side effects (e.g., fetching data, subscriptions)
  useEffect(() => {
    // Your code here for side effects

    // Cleanup function (optional)
    return () => {
      // Perform cleanup (e.g., unsubscribe from subscriptions)
    };
  }, [dependencies]);

  // Custom hook (if you have one)
  const customHookValue = useCustomHook();

  // Your component JSX
  return (
    <div>
      <p>State: {myState}</p>
      <p>Custom Hook Value: {customHookValue}</p>
    </div>
  );
};

export default MyComponent;

redux-----------------------
central data store

- reducers - manage the state and returns the newely updated state.
- actions - type - identifier
            payload - data
- dispatch - actions to update the data