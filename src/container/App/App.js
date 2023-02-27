import React from "react";
import Template from "../../components/Template/Template";
const data = [
  {
    name: "Cortana",
    company: "Microsoft",
  },
  {
    name: "Alexa",
    company: "Amazon",
  },
  {
    name: "Siri",
    company: "Apple",
  },
];

const App = () => {
  let pdas = data.map((pda,index) => <Template name={pda.name} company={pda.company} key={index}/>);
  return (
    <div>
      <h2 style={{color:"#bf7b7b"}}>Personal Digital Assistants</h2>
      {pdas}
    </div>
  );
};
export default App;
