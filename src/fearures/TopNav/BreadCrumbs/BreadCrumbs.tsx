import { useState, useEffect } from "react";
import { useSetQuery } from "../../../hooks/useSetQuery";
import { useQuery } from "../../../hooks/useQuery";
import postData from "../../../../utils/postData";
import getData from "../../../../utils/getData";
import "./BreadCrumbs.scss";

const url = "http://localhost:5000";

const BreadCrumbs = (): JSX.Element => {
  const [filename, setFilename] = useState<string>();
  const setQuery = useSetQuery();
  const { id } = useQuery();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${url}/getNote/${id}`);
      setFilename(result.text.title);
    };
    fetchData();
  }, [id]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
  };

  const handleTextBlur = () => {
    postData(`${url}/updateNote`, {
      id: id,
      text: {
        title: filename,
      },
      info: {
        timeModified: new Date().toString(),
      },
    });
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
        onBlur={handleTextBlur}
      />
    </div>
  );
};

export default BreadCrumbs;
