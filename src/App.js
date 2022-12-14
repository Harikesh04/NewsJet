import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header.js";
import Home from "./Component/Home/Home.js"

function App() {
  const pageSize = 5;
  const apiKey = "c9fe52a0fb234e13b80ef001242b0299";
  // const apiKey = process.env.REACT_APP_APIKEY;
  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
        <Route exact path="/technews" element={<Home setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        <Route exact path="/healthnews" element={<Home setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
        <Route exact path="/businessnews" element={<Home setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route exact path="/Entertainment" element={<Home setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
        <Route exact path="/Sports" element={<Home setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path="/Science" element={<Home setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
       
      </Routes>
    </Router>
  );
}

export default App;
