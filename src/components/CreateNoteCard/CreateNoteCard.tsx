import "./CreateNoteCard.scss";
import { useSetQuery } from "../../hooks/useSetQuery";

const CreateNoteCard = () => {
  const SetQuery = useSetQuery();

  return (
    <div className="create-note-card" onClick={()=>{SetQuery({view:"new"})}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
      >
        <mask
          id="mask0_33_332"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <rect width="100" height="100" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_33_332)">
          <path
            d="M45.8333 54.1667H20.8333V45.8334H45.8333V20.8334H54.1666V45.8334H79.1666V54.1667H54.1666V79.1667H45.8333V54.1667Z"
            fill="#3C3C3C"
          />
        </g>
      </svg>
      <div className="text">Create a new note</div>
    </div>
  );
};

export default CreateNoteCard;
