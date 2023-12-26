import { useState } from "react";
import { useSetQuery } from "../../../hooks/useSetQuery";
import "./BreadCrumbs.scss";

const BreadCrumbs = (): JSX.Element => {
  const [filename, setFilename] = useState("Bread");
  const setQuery = useSetQuery();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
  };
  return (
    <div className="bread-crumbs">
      <span
        className="username"
        onClick={() => {
          setQuery({ view: "home" });
        }}
      >
        Akshay Vs /
      </span>
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
