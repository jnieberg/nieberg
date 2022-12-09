import "./Card.scss";

const Card = ({ title = "", image = "", heading = "", subheading = "", text = "" }) => (
  <>
    {image && <img src={image} alt={heading} className="card-image" />}
    <div className="card">
      {title && <h2>{title}</h2>}
      {heading && <h3>{heading}</h3>}
      {subheading && <strong>{subheading}</strong>}
      {text && <p>{text}</p>}
    </div>
  </>
);

export default Card;
