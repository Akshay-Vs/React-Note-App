import "./Home.scss";
import NotesCard from "../../../components/NotesCard";

const data = [
  {
    id: 1,
    title: "Project Proposal",
    date: "2023-12-23",
    description:
      "A comprehensive proposal outlining the objectives, scope, and deliverables of the upcoming project.",
    info: "12 KB Backedup",
  },
  {
    id: 2,
    title: "Marketing Campaign Strategy",
    date: "2023-12-23",
    description:
      "Detailed plan for the upcoming marketing campaign, including target audience, channels, and key messaging.",
    info: "15 KB Backedup",
  },
  {
    id: 3,
    title: "Financial Report Q3",
    date: "2023-12-24",
    description:
      "Quarterly financial report highlighting revenue, expenses, and overall financial performance.",
    info: "10 KB Backedup",
  },
  {
    id: 4,
    title: "Customer Satisfaction Survey Results",
    date: "2023-12-24",
    description:
      "Analysis of recent customer satisfaction survey findings, with insights and action items.",
    info: "18 KB Backedup",
  },
  {
    id: 5,
    title: "Software Development Plan",
    date: "2023-12-25",
    description:
      "A comprehensive plan outlining the development phases, timelines, and key milestones for a software project.",
    info: "8 KB Backedup",
  },
  {
    id: 6,
    title: "Employee Training Module",
    date: "2023-12-25",
    description:
      "Training materials for an upcoming employee training session, including modules and learning objectives.",
    info: "13 KB Backedup",
  },
  {
    id: 7,
    title: "Market Research Findings",
    date: "2023-12-26",
    description:
      "Detailed findings from recent market research, including trends, competitor analysis, and customer insights.",
    info: "20 KB Backedup",
  },
  {
    id: 8,
    title: "Strategic Business Plan",
    date: "2023-12-26",
    description:
      "Long-term business plan outlining goals, strategies, and tactics for sustainable growth and success.",
    info: "14 KB Backedup",
  },
  {
    id: 9,
    title: "Task Management System Guide",
    date: "2023-12-27",
    description:
      "User guide for the task management system, including features, functionalities, and troubleshooting tips.User guide for the task management system, including features, functionalities, and troubleshooting tips.User guide for the task management system, including features, functionalities, and troubleshooting tips.",
    info: "9 KB Backedup",
  },
  {
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
      {data.map((item) => (
        <NotesCard
          key={item.id}
          title={item.title}
          time={item.date}
          description={item.description}
          info={item.info}
        />
      ))}
    </div>
  );
};

export default Home;
