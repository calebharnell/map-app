import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
import './App.css';

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
