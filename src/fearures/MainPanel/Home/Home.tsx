import "./Home.scss";
import NotesCard from "../../../components/NotesCard";
import CreateNoteCard from "../../../components/CreateNoteCard";
import TopBar from "./TopBar";

const data = [
  {
    id: 10,
    title: "Employee Wellness Program Overview",
    date: "2023-12-27",
    description:
      "Overview of the upcoming employee wellness program, including activities, benefits, and participation details.",
    info: "16 KB Backedup",
  }, {
    id: 10,
    title: "Employee Wellness Program Overview",
    date: "2023-12-27",
    description:
      "Overview of the upcoming employee wellness program, including activities, benefits, and participation details.",
    info: "16 KB Backedup",
  }, {
    id: 10,
    title: "Employee Wellness Program Overview",
    date: "2023-12-27",
    description:
      "Overview of the upcoming employee wellness program, including activities, benefits, and participation details.",
    info: "16 KB Backedup",
  }, {
    id: 10,
    title: "Employee Wellness Program Overview",
    date: "2023-12-27",
    description:
      "Overview of the upcoming employee wellness program, including activities, benefits, and participation details.",
    info: "16 KB Backedup",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <TopBar />
      <div className="card-container">
        {data.map((item) => (
          <NotesCard
            key={item.id}
            id={`${item.id}`}
            title={item.title}
            time={item.date}
            description={item.description}
            info={item.info}
          />
        ))}

        <CreateNoteCard />
      </div>
    </div>
  );
};

export default Home;
