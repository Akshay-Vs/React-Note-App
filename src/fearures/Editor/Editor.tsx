import { useQuery } from "../../hooks/useQuery";
import "./Editor.scss";

const Editor = () => {
  const { size, family } = useQuery();
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