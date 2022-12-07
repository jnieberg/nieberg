import "./Rating.scss";
import Fa from "./Fa";

const Rating = ({ name = "", value = 5 }) => (
  <>
    <div className="rating" aria-label={`Rating of ${value} stars`}>
      <Fa icon="star" type={value < 1 ? "regular" : "solid"} />
      <Fa icon="star" type={value < 2 ? "regular" : "solid"} />
      <Fa icon="star" type={value < 3 ? "regular" : "solid"} />
      <Fa icon="star" type={value < 4 ? "regular" : "solid"} />
      <Fa icon="star" type={value < 5 ? "regular" : "solid"} />
    </div>
    {name && <div>{name}</div>}
  </>
);

export default Rating;
