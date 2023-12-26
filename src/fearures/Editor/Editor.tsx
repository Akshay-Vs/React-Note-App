import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
import "./Editor.scss";

const Editor = () => {
  const { size, family } = useQuery();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Save triggered");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="editor">
      <textarea
        style={{
          fontSize: `${size}px`,
          fontFamily: `${family}`,
        }}
      />
    </div>
  );
};

export default Editor;
