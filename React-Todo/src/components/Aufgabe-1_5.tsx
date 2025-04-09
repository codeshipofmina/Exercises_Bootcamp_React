import "../App.css";
import { Planet } from "react-kawaii";
import { useState } from "react";

const moods = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];
function App() {
  const [currentMood, setCurrentMood] = useState("shocked");
  const randomMood = () => {
    setCurrentMood(moods[Math.floor(Math.random() * moods.length)]);
  };
  return (
    <div>
      <Planet mood={currentMood}></Planet>
      <button onClick={randomMood}>change Mood</button>
    </div>
  );
}

export default App;
