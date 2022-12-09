import "./Svg.scss";

const Svg = ({ icon = "", className = "" }) => <img alt={icon} src={`/icons/${icon}.svg`} className={`svg ${className}`} />;

export default Svg;
