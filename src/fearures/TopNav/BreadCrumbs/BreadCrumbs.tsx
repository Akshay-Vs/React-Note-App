import { useState } from "react";
import "./BreadCrumbs.scss";

const BreadCrumbs = (): JSX.Element => {
  const [filename, setFilename] = useState("Bread");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
  };
  return (
    <div className="bread-crumbs">
      <span className="username">Akshay Vs /</span>
      <input
        type="text"
        className="filename"
        value={filename}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default BreadCrumbs;
