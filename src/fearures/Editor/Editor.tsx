import { useQuery } from "../../hooks/useQuery";
import { useEffect, useState } from "react";
import getData from "../../../utils/getData";
import postData from "../../../utils/postData";
import { useUser } from "@clerk/clerk-react";
import "./Editor.scss";

const url = import.meta.env.VITE_BACKEND_URL;

const Editor = () => {
  const [text, setText] = useState<string>();
  const { size, family, id, view } = useQuery();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const getContent = async () => {
      const result = await getData(`${url}/getNote/${user?.id}/${id}`);
      setText(result.text.content);
    };
    view === "editor" && getContent();
  }, [id, view, user]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        postData(`${url}/updateNote/${user?.id}`, {
          id: id,
          userId: user?.id,
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
  }, [text, user, id]);

  if (!isLoaded) {
    return null;
  }

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
