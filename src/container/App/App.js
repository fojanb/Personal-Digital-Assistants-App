import React from "react";
import Template from "../../components/Template/Template";
import alexa from "../../assets/alexa.png";
import cortana from "../../assets/cortana.png";
import siri from "../../assets/siri.png";

const data = [
  {
    name: "Cortana",
    company: "Microsoft",
    imageSrc: { cortana },
    alt: "Cortana Logo",
  },
  {
    name: "Alexa",
    company: "Amazon",
    imageSrc: { alexa },
    alt: "Alexa Logo",
  },
  {
    name: "Siri",
    company: "Apple",
    imageSrc: { siri },
    alt: "Siri Logo",
  },
];

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
  return (
    <div>
      <h1 style={{ color: "#5b3f30",fontWeight:"bold" }}>Personal Digital Assistants</h1>
      <div className="cardsWrapper">{pdas}</div>
    </div>
  );
};
export default App;
