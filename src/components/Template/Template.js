const Template = ({ name, company, imageSrc, alt }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={imageSrc}
            alt={alt}
            style={{width:"150px",height:"150px"}}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
