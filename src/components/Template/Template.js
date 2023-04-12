const Template = ({ name, company, imageSrc, alt, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3">
          <img
            src={imageSrc}
            alt={alt}
            style={{ width: "150px", height: "150px" }}
          />
        </figure>
      </div>
      <div className="card-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{company}</p>
      </div>
      <div className="card-content">
          <p className="subtitle is-6" id="description">{description}</p>
      </div>
    </div>
  );
};
export default Template;
