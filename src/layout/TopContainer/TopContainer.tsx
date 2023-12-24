import React from "react";
import "./TopContainer.scss";

interface Props {
  children: React.ReactNode;
  isCollapsed: boolean;
}

const TopContainer = ({ children, isCollapsed }: Props) => {
  return <nav className={`top-container ${isCollapsed?"collapsed":"expanded"}`}>{children}</nav>;
};

export default TopContainer;
