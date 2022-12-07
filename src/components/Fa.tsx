import "./Fa.scss";
import { FC } from "react";

type FaType = {
  type?: string;
  icon: string;
  className?: string;
};

const Fa: FC<FaType> = ({ type = "solid", icon, className = "" }) => <i className={`fa fa-${type} fa-${icon} ${className}`} />;

export default Fa;
