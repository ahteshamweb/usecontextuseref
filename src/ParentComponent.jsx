import React, { useContext, useRef } from "react";

// Create a context
const MyContext = React.createContext();

// Parent component that provides the context value
const ParentComponent = () => {
  const contextValue = "Hello from parent!";
  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Child component that consumes the context value and uses a ref
const ChildComponent = () => {
  // Use useContext to access the context value
  const contextValue = useContext(MyContext);

  // Use useRef to create a ref
  const inputRef = useRef();

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h1>{contextValue}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter a value" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ParentComponent;

 
 
