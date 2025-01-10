import { useState } from "react";
import PollList from "./components/PollList";

function App() {
  const [polls, setPolls] = useState([
    {
      question: "What is your favourite programming langauge?",
      options: [
        { option: "JavaScript", votes: 0 },
        { option: "Python", votes: 0 },
        { option: "C++", votes: 0 },
        { option: "Java", votes: 0 },
      ],
    },
    {
      question: "What Game Engine do you use?",
      options: [
        { option: "Godot", votes: 0 },
        { option: "Unity", votes: 0 },
        { option: "Unreal Engine", votes: 0 },
        { option: "Cry Engine", votes: 0 },
      ],
    },
    {
      question: "What sphere of programming do you major?",
      options: [
        { option: "Web Development", votes: 0 },
        { option: "Mobile App Development", votes: 0 },
        { option: "Machine Learning", votes: 0 },
        { option: "Game Development", votes: 0 },
        { option: "Devops", votes: 0 },
      ],
    },
  ]);

  const handleVote = (pollIndex, votedOption) => {
    const newPolls = [...polls];
    const poll = newPolls[pollIndex];
    const option = poll.options.find((o) => o.option == votedOption.option);
    option.votes += 1;
    setPolls = newPolls;
  };

  return (
    <div className="app">
      <h1>Polls app in React</h1>
      <PollList polls={polls} onVote={handleVote} />
    </div>
  );
}

export default App;
