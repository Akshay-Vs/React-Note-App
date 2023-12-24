import React from "react";
import "./TopContainer.scss";
import { useQuery } from "../../hooks/useQuery";
interface Props {
  children: React.ReactNode;
}

const TopContainer = ({ children }: Props) => {
  const { isCollapsed } = useQuery();

  return (
    <nav
      className={`top-container ${
        isCollapsed === "true" ? "collapsed" : "expanded"
      }`}
    >
      {children}
    </nav>
  );
};

export default TopContainer;
