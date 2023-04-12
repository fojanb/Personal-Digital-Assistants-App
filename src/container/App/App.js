import React from "react";
import Template from "../../components/Template/Template";
import { data } from "../../components/Data/Data";
import "bulma/css/bulma.css";

const App = () => {
  let pdas = data.map((pda, index) => (
    <Template
      name={pda.name}
      company={pda.company}
      imageSrc={pda.imageSrc}
      key={index}
      alt={pda.alt}
      description={pda.description}
    />
  ));
  return (
    <div>
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="cardsWrapper">{pdas}</div>
    </div>
  );
};
export default App;
