import { useSetQuery } from "../../../../hooks/useSetQuery";
import postData from "../../../../../utils/postData";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";
import { useUser } from "@clerk/clerk-react";

const url = import.meta.env.VITE_BACKEND_URL;

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
  const { user } = useUser();

  const handleClick = async () => {
    SetQuery({ view: "new" });
    const result = await postData<SubmitData>(`${url}/createNote/${user?.id}`, {
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
    });
    SetQuery({ id: result.id, view: "new" });
  };
  return <ButtonPrimary text="Create New" onClick={handleClick} />;
};

export default CreateNote;
