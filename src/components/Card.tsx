import "./Card.scss";

type WrapperType = {
  children?: React.ReactNode;
};

const Card = ({ title = "", image = "", heading = "", subheading = "", text = "", href = "" }) => {
  const LinkWrapper = ({ children }: WrapperType) =>
    href ? (
      <a className="card-image" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      <div className="card-image">{children}</div>
    );

  return (
    <>
      <LinkWrapper>{image && <img src={image} alt={heading} />}</LinkWrapper>
      <div className="card">
        {title && <h2>{title}</h2>}
        {heading && <h3>{heading}</h3>}
        {subheading && <strong>{subheading}</strong>}
        {text && <p>{text}</p>}
      </div>
    </>
  );
};

export default Card;
