// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a refrence to the div with ID root
const el = document.getElementById("root");

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component: component is a Js function that returns JSX
const App = () => {
  // Computations
  const message = () => {
    let msg = "Hello";
    if(Math.random() < 0.5){
      msg = "Bye";
    }
    return msg;
  };
  const time = () =>{
    return (new Date().toLocaleTimeString());
  }
  const identity = () => {
    const name = "Fojan";
    const age = "33";
    return `My name is ${name} and I am ${age} years old.`
  }
// Show result on screen
const myArray = [1,2,3,4];
  return (
  <div>
    <h3>{message()}</h3>
    <div>{time()}</div>
    <p>{identity()}</p>
    <input type="number" min={5} max={20} style={{width:"10%"}} placeholder="i.e. 10"/>
    <div>{myArray}</div>
  </div>
  );
};

root.render(<App />);
