import { useSetQuery } from "../../../../hooks/useSetQuery";
import postData from "../../../../../utils/postData";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";

interface SubmitData {
  text: {
    title: string;
    content: string;
  };
  info: {
    timeModified: string;
    timeCreated: string;
    fontSize: number;
    fontFamily: string;
    isPrivate: boolean;
  };
}

const CreateNote = () => {
  const SetQuery = useSetQuery();

  const handleClick = async () => {
    SetQuery({ view: "new" });
    const result = await postData<SubmitData>(
      "http://localhost:5000/createNote",
      {
        text: {
          title: "Untitled",
          content: "",
        },
        info: {
          timeModified: new Date().toString(),
          timeCreated: new Date().toString(),
          fontSize: 16,
          fontFamily: "Rubik",
          isPrivate: false,
        },
      }
    );
    SetQuery({ id: result.id, view: "new" });
  };
  return <ButtonPrimary text="Create New" onClick={handleClick} />;
};

export default CreateNote;
