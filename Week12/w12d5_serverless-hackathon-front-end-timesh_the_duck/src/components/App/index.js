import "./App.css";
import Display from "../Display";
import AdminLogin from "../AdminLogin";
import React, { useState } from "react";
import matalowen from "../matalowen.png";
import Toggle from "../Toggle";
import { useThemeContext } from "../../themeContext";

function App() {
  const [refresh, setRefresh] = useState(0);
  const [LSDtheme, toggleTheme] = useThemeContext();

  const text = LSDtheme ? "textlsd" : "text";
  return (
    <div
      className={`bg-${
        LSDtheme ? "backgroundcolorlsd" : "backgroundcolor"
      } min-h-screen flex flex-col items-center text-center justify-evenly items-evenly`}
    >
      <img src={matalowen} alt="header" className="h-32" />
      <h1 className={`text-${text}`}>Shopping List</h1>
      <AdminLogin refresh={refresh} setRefresh={setRefresh} />
      <Toggle toggleTheme={toggleTheme} />
      <Display refresh={refresh} />
    </div>
  );
}

export default App;
