import React from "react";

const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext.Provider value="Hello from Context!">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  return (
    <MyContext.Consumer>
      {value => <div>{value}</div>}
    </MyContext.Consumer>
  );
}

function ContextAPI() {
  return (
    <div>
      <Parent />
      {/* <Child /> */}
    </div>
  );
} 

export  default ContextAPI;