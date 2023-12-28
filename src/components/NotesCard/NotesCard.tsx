import "./NotesCard.scss";
import { useSetQuery } from "../../hooks/useSetQuery";
import postData from "../../../utils/postData";

interface Props {
  id: string;
  title: string;
  time: string;
  description: string;
  info: string;
}

const url = "http://localhost:5000";

const NotesCard = ({
  id,
  title,
  time,
  description,
  info,
}: Props): JSX.Element => {
  const SetQuery = useSetQuery();

  const handleDelete = () => {
    postData(`${url}/deleteNote/${id}`);
    SetQuery({ d: id });
  };

  return (
    <div
      className="notes-card"
      onClick={() => {
        SetQuery({ id: id, view: "editor" });
      }}
    >
      <div className="wrapper-top">
        <div className="text-wrapper-title">{title}</div>
        <div className="text-wrapper-time">{time}</div>
      </div>
      <div className="wrapper-middle">
        <p className="text-description">{description}</p>
      </div>
      <div className="wrapper-bottom">
        <div className="text-wrapper-info">{info}</div>
        <div className="wrapper-icons">
          <div className="icon" onClick={() => alert("Not available")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_33_291"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_33_291)">
                <path
                  d="M5.99998 22C5.44998 22 4.97915 21.8042 4.58748 21.4125C4.19582 21.0208 3.99998 20.55 3.99998 20V10C3.99998 9.45 4.19582 8.97917 4.58748 8.5875C4.97915 8.19583 5.44998 8 5.99998 8H6.99998V6C6.99998 4.61667 7.48748 3.4375 8.46248 2.4625C9.43748 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H5.99998ZM5.99998 20H18V10H5.99998V20ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 9.99998 14.45 9.99998 15C9.99998 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM8.99998 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.87498 3.875C9.29165 4.45833 8.99998 5.16667 8.99998 6V8Z"
                  fill="#3C3C3C"
                  fill-opacity="0.6"
                />
              </g>
            </svg>
          </div>
          <div
            className="icon"
            onClick={(event) => {
              event.stopPropagation();
              handleDelete();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_33_294"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_33_294)">
                <path
                  d="M11.25 21H7.00001C6.45001 21 5.97917 20.8042 5.58751 20.4125C5.19584 20.0208 5.00001 19.55 5.00001 19V6H4.00001V4H9.00001V3H15V4H20V6H19V10.3C18.7167 10.2167 18.3875 10.1458 18.0125 10.0875C17.6375 10.0292 17.3 10 17 10V6H7.00001V19H10.3C10.4 19.35 10.5333 19.6958 10.7 20.0375C10.8667 20.3792 11.05 20.7 11.25 21ZM9.00001 17H10C10 15.95 10.1667 15.0875 10.5 14.4125L11 13.4V8H9.00001V17ZM13 11.25C13.2833 11.0667 13.6042 10.8833 13.9625 10.7C14.3208 10.5167 14.6667 10.3833 15 10.3V8H13V11.25ZM17 22C15.6167 22 14.4375 21.5125 13.4625 20.5375C12.4875 19.5625 12 18.3833 12 17C12 15.6167 12.4875 14.4375 13.4625 13.4625C14.4375 12.4875 15.6167 12 17 12C18.3833 12 19.5625 12.4875 20.5375 13.4625C21.5125 14.4375 22 15.6167 22 17C22 18.3833 21.5125 19.5625 20.5375 20.5375C19.5625 21.5125 18.3833 22 17 22ZM18.65 19.35L19.35 18.65L17.5 16.8V14H16.5V17.2L18.65 19.35Z"
                  fill="#3C3C3C"
                  fill-opacity="0.6"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
