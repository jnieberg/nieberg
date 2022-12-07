import "./Card.scss";

const Card = ({ title = "", image = "", heading = "", text = "" }) => (
  <>
    {image && <img src={image} alt={heading} className="card-image" />}
    <div className="card">
      {title && <h2>{title}</h2>}
      {heading && <h3>{heading}</h3>}
      {text && <section>{text}</section>}
    </div>
  </>
);

export default Card;
