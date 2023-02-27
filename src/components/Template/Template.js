const Template = ({ name, company }) => {
  return (
    <div style={{ border: "2px solid #144552", width: "50%" }}>
      <h3>{name}</h3>
      {/* <img src={}/> */}
      <div>{company}</div>
    </div>
  );
};
export default Template;
