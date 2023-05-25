import "./App.css";
import Bar from "./home/Bar";
import Slider from "./slider/Slider";
import NewsFeed from "./News Source/NewsFeed";
import { useState } from "react";

const handleSliderChange = (event) => {
  console.log("Slider value:", event.target.value);
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Bar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <Slider onChange={handleSliderChange} />
      <NewsFeed searchQuery={searchQuery} />
    </div>
  );
}

export default App;