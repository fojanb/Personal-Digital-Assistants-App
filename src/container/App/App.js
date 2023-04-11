import React from "react";
import Template from "../../components/Template/Template";
import { data } from "../../components/Data/Data";

const App = () => {
  let pdas = data.map((pda, index) => (
    <Template
      name={pda.name}
      company={pda.company}
      imageSrc={pda.imageSrc}
      key={index}
      alt={pda.alt}
    />
  ));
  // let arr =[<div>first</div>,<div>second</div>,<div>third</div>];
  return (
    <div>
      <h1 style={{ color: "#5b3f30", fontWeight: "bold" }}>
        Personal Digital Assistants
      </h1>
      <div className="cardsWrapper">{pdas}</div>
    </div>
  );
};
export default App;
