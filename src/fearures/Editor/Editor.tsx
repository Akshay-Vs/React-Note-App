import { useQuery } from "../../hooks/useQuery";
import { useEffect, useState } from "react";
import getData from "../../../utils/getData";
import postData from "../../../utils/postData";
import "./Editor.scss";

const url = "http://localhost:5000";

const Editor = () => {
  const [text, setText] = useState<string>();
  const { size, family, id, view } = useQuery();

  useEffect(() => {
    const getContent = async () => {
      const result = await getData(`${url}/getNote/${id}`);
      setText(result.text.content);
    };
    view === "editor" && getContent();
  }, [id, view]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        postData(`${url}/updateNote`, {
          id: id,
          text: {
            content: text,
          },
          info: {
            timeModified: new Date().toString(),
          },
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [text, id]);

  return (
    <div className="editor">
      <textarea
        style={{
          fontSize: `${size}px`,
          fontFamily: `${family}`,
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Editor;
