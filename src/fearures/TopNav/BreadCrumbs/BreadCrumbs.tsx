import { useState, useEffect } from "react";
import { useSetQuery } from "../../../hooks/useSetQuery";
import { useQuery } from "../../../hooks/useQuery";
import postData from "../../../../utils/postData";
import getData from "../../../../utils/getData";
import { useUser } from "@clerk/clerk-react";

import "./BreadCrumbs.scss";

const url = import.meta.env.VITE_BACKEND_URL;

const BreadCrumbs = (): JSX.Element => {
  const [filename, setFilename] = useState<string>();
  const setQuery = useSetQuery();
  const { id } = useQuery();
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${url}/getNote/${user?.id}/${id}`);
      setFilename(result.text.title);
    };
    fetchData();
  }, [id, user]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
  };

  const handleTextBlur = () => {
    postData(`${url}/updateNote/${user?.id}`, {
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
        {user?.id} /
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
