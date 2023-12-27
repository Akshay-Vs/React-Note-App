import { useEffect, useState } from "react";
import "./Home.scss";
import NotesCard from "../../../components/NotesCard";
import CreateNoteCard from "../../../components/CreateNoteCard";
import TopBar from "./TopBar";
import getData from "../../../../utils/getData";
import { NoteItem } from "../../../../types/requestData";
import { useQuery } from "../../../hooks/useQuery";

const url = "http://localhost:5000";

const Home = () => {
  const [data, setData] = useState<NoteItem[]>([]);
  const { month } = useQuery();

  useEffect(() => {
    const fetchData = async () => {
      const result: NoteItem[] = await getData(
        `${url}/getNotes`
      );
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <TopBar />
      <div className="card-container">
        {data
          .filter((item) => {
            if (month === "all" || !month) {
              return true;
            }
            const itemMonth = item.info.timeModified.split(" ")[1];
            return itemMonth === month;
          })
          .map((item) => (
            <NotesCard
              key={item.id}
              id={`${item.id}`}
              title={item.text.title}
              time={item.info.timeModified.split(" ").slice(1, 3).join(" ")}
              description={item.text.content}
              info={"18KB Backed up"}
            />
          ))}
        <CreateNoteCard />
      </div>
    </div>
  );
};

export default Home;
