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
what? - 


redux-----------------------