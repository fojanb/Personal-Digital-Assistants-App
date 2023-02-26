import React from "react";
const styles = {
  input: {
    fontWeight: "bold",
    backgroundColor: "yellow",
    width: "auto",
    border: "none",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  textarea: {
    width: "50%",
    margin: "10px 0",
    textAlign: "left",
  },
};
const App = () => {
  const inputTools = {
    type: "text",
    placeholder: "i.e. 12",
    min: 5,
    max: 10,
    id: "myTranslate",
  };
  return (
    <div id="wrapper" style={styles.wrapper}>
      <h3>Please enter your word or sentence down below</h3>
      <input
        type={inputTools.type}
        placeholder={inputTools.placeholder}
        min={inputTools.min}
        max={inputTools.max}
        style={styles.input}
        id={inputTools.id}
        spellCheck
      />
      <textarea placeholder="Type here..." style={styles.textarea} autoFocus />
    </div>
  );
};

export {App,styles};
