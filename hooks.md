As of my last knowledge update in January 2022, React provides the following built-in hooks:

1. **State Hooks:**
   - `useState`: Used to add state to functional components.
     ```jsx
     const [state, setState] = useState(initialState);
     ```

2. **Effect Hooks:**
   - `useEffect`: Used for side effects in your components (e.g., data fetching, subscriptions, manual DOM manipulations).
     ```jsx
     useEffect(() => {
       // Effect code here
       return () => {
         // Cleanup code here
       };
     }, [dependencies]);
     ```

3. **Context Hook:**
   - `useContext`: Used to consume values from React context.
     ```jsx
     const contextValue = useContext(MyContext);
     ```

4. **Reducer Hook:**
   - `useReducer`: Used for more complex state logic by dispatching actions.
     ```jsx
     const [state, dispatch] = useReducer(reducer, initialState);
     ```

5. **Callback Hook:**
   - `useCallback`: Memoizes a callback function.
     ```jsx
     const memoizedCallback = useCallback(() => {
       // Callback logic here
     }, [dependencies]);
     ```

6. **Memo Hook:**
   - `useMemo`: Memoizes the result of a function.
     ```jsx
     const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
     ```

7. **Ref Hook:**
   - `useRef`: Creates a mutable object that persists for the lifetime of the component.
     ```jsx
     const myRef = useRef(initialValue);
     ```

8. **Effect Cleanup Hook:**
   - `useEffect` cleanup function: Used for cleanup operations in `useEffect`.
     ```jsx
     useEffect(() => {
       // Effect code here
       return () => {
         // Cleanup code here
       };
     }, [dependencies]);
     ```

9. **Layout Effect Hook:**
   - `useLayoutEffect`: Similar to `useEffect`, but fires synchronously after all DOM mutations.
     ```jsx
     useLayoutEffect(() => {
       // Effect code here
       return () => {
         // Cleanup code here
       };
     }, [dependencies]);
     ```

10. **Imperative Handle Hook:**
    - `useImperativeHandle`: Customizes the instance value exposed when using `forwardRef`.
      ```jsx
      useImperativeHandle(ref, () => ({
        // Exposed methods and properties
      }), [dependencies]);
      ```

11. **Debug Value Hook:**
    - `useDebugValue`: Displays a label for custom hooks in React DevTools.
      ```jsx
      useDebugValue(value);
      ```

Creating a custom hook involves writing a function that uses one or more of the existing hooks to encapsulate and reuse some behavior. Here's a simple example of a custom hook that manages a boolean state:

```jsx
// useBooleanState.js
import { useState } from 'react';

function useBooleanState(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggleValue];
}

export default useBooleanState;
```

You can then use this custom hook in your components:

```jsx
// MyComponent.js
import React from 'react';
import useBooleanState from './useBooleanState';

function MyComponent() {
  const [isOn, toggleIsOn] = useBooleanState();

  return (
    <div>
      <p>Is On: {isOn.toString()}</p>
      <button onClick={toggleIsOn}>Toggle</button>
    </div>
  );
}

export default MyComponent;
```

This is a basic example, but custom hooks can encapsulate complex logic and make it easy to reuse across different components in your application.