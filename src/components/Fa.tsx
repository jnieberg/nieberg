import "./Fa.scss";

const Fa = ({ type = "solid", icon = "", className = "" }) => <i className={`fa fa-${type} fa-${icon} ${className}`} />;

export default Fa;
