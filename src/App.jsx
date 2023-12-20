import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import PuddleMain from "./pages/puddle/puddleindex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PuddleMain />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
